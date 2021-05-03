import {
  useLayoutEffect,
  useRef,
  useState,
  useEffect,
  useCallback,
} from "react";

import "./App.css";
import logo from "./aldia.svg";

function App() {
  const headerEl = useRef(null);
  const logoEl = useRef(null);
  const [isSticky, setSticky] = useState(false);
  const [offsetTop, setOffsetTop] = useState(0);

  const handleScroll = useCallback(() => {
    // Toggle stickiness
    // Applies stickied className
    if (window.pageYOffset > offsetTop) {
      setSticky(true);
    } else {
      setSticky(false);
    }

    // Scalar function
    // ---------------
    // Goal: roll a function that given a range:
    // [0,infinity]
    // returns a range:
    // [0-50]
    const scale = Math.max(50, 100 - 0.3 * window.pageYOffset);

    // Apply transformation functions
    logoEl.current.style.transform = `
      translate(0, ${window.pageYOffset - Math.min(window.pageYOffset, 40)}px)
      scale(${scale}%, ${scale}%)
    `;
  }, [offsetTop, logoEl]);

  // Re-calculate scrolling offset when window resizes
  const handleResize = useCallback(
    (event) => {
      const { offsetTop } = headerEl.current;
      setOffsetTop(offsetTop);
    },
    [headerEl]
  );

  useLayoutEffect(() => {
    // Initialize an offset for stickiness offset
    const { offsetTop: newOffset } = headerEl.current;
    if (offsetTop === 0) setOffsetTop(newOffset);

    // Setup animation scroll handler
    window.addEventListener("scroll", handleScroll);
    // Tear down scroll handler
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll, offsetTop]);

  // Setup window resize handler
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    // Tear down window resizer
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  // Stickiness toggle
  const headerClassName = isSticky ? "header sticky" : "header";

  return (
    <div className="App">
      <div className="top-container">
        <img className="logo" id="logo" src={logo} ref={logoEl}></img>
      </div>
      <div className={headerClassName} ref={headerEl} id="header">
        <h2>My Header</h2>
      </div>
      <div className="content">
        <p>
          Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
          definitiones no quo, maluisset concludaturque et eum, altera fabulas
          ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
          Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
          Eum no molestiae voluptatibus.
        </p>
        <p>
          Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
          definitiones no quo, maluisset concludaturque et eum, altera fabulas
          ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
          Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
          Eum no molestiae voluptatibus.
        </p>
        <p>
          Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
          definitiones no quo, maluisset concludaturque et eum, altera fabulas
          ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
          Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
          Eum no molestiae voluptatibus.
        </p>
        <p>
          Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
          definitiones no quo, maluisset concludaturque et eum, altera fabulas
          ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
          Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
          Eum no molestiae voluptatibus.
        </p>
        <p>
          Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
          definitiones no quo, maluisset concludaturque et eum, altera fabulas
          ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
          Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
          Eum no molestiae voluptatibus.
        </p>{" "}
        <p>
          Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
          definitiones no quo, maluisset concludaturque et eum, altera fabulas
          ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
          Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
          Eum no molestiae voluptatibus.
        </p>
        <p>
          Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
          definitiones no quo, maluisset concludaturque et eum, altera fabulas
          ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
          Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
          Eum no molestiae voluptatibus.
        </p>{" "}
        <p>
          Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
          definitiones no quo, maluisset concludaturque et eum, altera fabulas
          ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
          Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
          Eum no molestiae voluptatibus.
        </p>
        <p>
          Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
          definitiones no quo, maluisset concludaturque et eum, altera fabulas
          ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
          Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
          Eum no molestiae voluptatibus.
        </p>{" "}
        <p>
          Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
          definitiones no quo, maluisset concludaturque et eum, altera fabulas
          ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
          Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
          Eum no molestiae voluptatibus.
        </p>
        <p>
          Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
          definitiones no quo, maluisset concludaturque et eum, altera fabulas
          ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
          Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
          Eum no molestiae voluptatibus.
        </p>
        <p>
          Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
          definitiones no quo, maluisset concludaturque et eum, altera fabulas
          ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
          Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
          Eum no molestiae voluptatibus.
        </p>
        <p>
          Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
          definitiones no quo, maluisset concludaturque et eum, altera fabulas
          ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
          Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
          Eum no molestiae voluptatibus.
        </p>
        <p>
          Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
          definitiones no quo, maluisset concludaturque et eum, altera fabulas
          ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
          Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
          Eum no molestiae voluptatibus.
        </p>
        <p>
          Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
          definitiones no quo, maluisset concludaturque et eum, altera fabulas
          ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
          Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
          Eum no molestiae voluptatibus.
        </p>
      </div>
    </div>
  );
}

export default App;
