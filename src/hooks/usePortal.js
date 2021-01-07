import { useRef, useEffect } from 'react';

/**
 * Creates DOM element to be used as React root.
 * @returns {HTMLElement}
 */
function createRootElement(id) {
  const rootContainer = document.createElement('div');
  rootContainer.setAttribute('id', id);
  return rootContainer;
}

/**
 * Appends element as last child of body.
 * @param {HTMLElement} rootElem
 */
function addRootElement(rootElem) {
  document.body.insertBefore(
    rootElem,
    document.body.lastElementChild.nextElementSibling
  );
}

/**
 * Hook to create a React Portal.
 * Automatically handles creating and tearing-down the root elements (no SRR
 * makes this trivial), so there is no need to ensure the parent target already
 * exists.
 * @example
 * const target = usePortal(id, [id]);
 * return createPortal(children, target);
 * @param {String} id The id of the target container, e.g 'modal' or 'spotlight'
 * @returns {HTMLElement} The DOM node to use as the Portal target.
 */
function usePortal(id) {
  const rootElemRef = useRef(null);
  useEffect(() => {
    // Extrae la referencia al elemento contenedor
    const existingParent = document.querySelector(`#${id}`);
    // Guarda el elemento si existe, si no, lo crea
    const parentElem = existingParent || createRootElement(id);

    //si no existe el elemento root, añade el recién creado
    if (!existingParent) {
      addRootElement(parentElem);
    }

    //Como rootElemRef .current = <div></div>
    //Se agrega este elemento al elemento root
    parentElem.appendChild(rootElemRef.current);

    return () => {
      //remueve el elemento interno
      rootElemRef.current.remove();
      //verifica si el root tiene algun elemento, sino, remueve el elemento root
      if (!parentElem.hasChildNodes()) {
        parentElem.remove();
      }
    };
  }, [id]);

  /**
   * It's important we evaluate this lazily:
   * - We need first render to contain the DOM element, so it shouldn't happen
   *   in useEffect. We would normally put this in the constructor().
   * - We can't do 'const rootElemRef = useRef(document.createElement('div))',
   *   since this will run every single render (that's a lot).
   * - We want the ref to consistently point to the same DOM element and only
   *   ever run once.
   * @link https://reactjs.org/docs/hooks-faq.html#how-to-create-expensive-objects-lazily
   */
  function getRootElem() {
    if (!rootElemRef.current) {
      rootElemRef.current = document.createElement('div');
    }
    return rootElemRef.current;
  }
  return getRootElem();
}

export default usePortal;
