import { useSelector } from "react-redux";
import logo from "../assets/img/logo.png";
import { Link, useLocation } from "react-router-dom";
import { cartSelector } from "../redux/slices/cartSlice";
import React from "react";
function Header() {
  const { items } = useSelector(cartSelector);
  const totalCount = items.reduce((sum, obj) => {
    return sum + obj.count;
  }, 0);
  const location = useLocation();
  const isMounted = React.useRef(false);
  React.useEffect(() => {
    if (isMounted) {
      const json = JSON.stringify(items);
      localStorage.setItem("cart", json);
    }
    isMounted.current = true;
  }, [items]);
  return (
    <div className="wrapperOfHeader">
      <header>
        <Link to="/Tasty-Food">
          <div className="header-left">
            <img src={logo} width={61} height={65} alt="" />
            <div className="header-info">
              <h1>Tasty food</h1>
              <p>Время работы: 10:00 - 21:00</p>
            </div>
          </div>
        </Link>

        {location.pathname !== "/cart" && (
          <Link to="/cart" className="header-right">
            <svg
              class="feather feather-shopping-cart"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            <span>{totalCount}</span>
          </Link>
        )}
      </header>
    </div>
  );
}
export default Header;
