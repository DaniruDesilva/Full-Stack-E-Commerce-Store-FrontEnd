function Navigation(props) {
  return (
    <nav className="flex items-center justify-between py-8 px-16">
      <div className="flex item-center gap-x-16">
        <a className="font-semibold text-3xl" href="/">
          Mebius
        </a>
        <div className="flex item-center gap-x-4">
          <a href="/">Home</a>
          <a href="/shop">Shop</a>
        </div>
      </div>
      <div className="flex item-center gap-x-8">
        <div>
          <a href="/cart" className="flex item-center gap-x-4 relative">
            <p className="tex-lg">{0}</p>
            <div className="flex item-center gap-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-shopping-cart"
              >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
              Cart
            </div>
          </a>
        </div>
        <p>Hi, {props.name}</p>
      </div>
    </nav>
  );
}

export default Navigation;
