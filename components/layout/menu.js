import Link from "next/link";

function TopMenu() {
  return (
    <div className="header_top">
      <div className="container">
        <div className="top_inner">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <div className="follow_us">
                <label>Follow Us:</label>
                <ul className="follow_link">
                  <li>
                    <a href="#">
                      <i className="ion-social-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ion-social-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ion-social-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="top_right text-right">
                <ul>
                  <li className="top_links">
                    <a href="#">
                      <i className="ion-android-person"></i> My Account
                      <i className="ion-ios-arrow-down"></i>
                    </a>
                    <ul className="dropdown_links">
                      <li>
                        <a href="checkout.html">Checkout </a>
                      </li>
                      <li>
                        <a href="my-account.html">My Account </a>
                      </li>
                      <li>
                        <a href="cart.html">Shopping Cart</a>
                      </li>
                      <li>
                        <a href="wishlist.html">Wishlist</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MainMenu() {
  return (
    <div className="header_middle">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-3 col-md-3">
            <div className="logo">
              <a href="index.html">
                <img src="/assets/img/logo/logo.png" alt="" />
              </a>
            </div>
          </div>
          <div className="col-lg-9 col-md-9">
            <div className="middel_right">
              <div className="search-container">
                <form action="#">
                  <div className="search_box">
                    <input
                      placeholder="Search entire store here ..."
                      type="text"
                    />
                    <button type="submit">
                      <i className="ion-ios-search-strong"></i>
                    </button>
                  </div>
                </form>
              </div>
              <div className="middel_right_info">
                <div className="header_wishlist">
                  <a href="wishlist.html">
                    <span className="lnr lnr-heart"></span> Wish list
                  </a>
                  <span className="wishlist_quantity">3</span>
                </div>
                <div className="mini_cart_wrapper">
                  <a>
                    <span className="lnr lnr-cart"></span>My Cart
                  </a>
                  <span className="cart_quantity">2</span>
                  <div className="mini_cart">
                    <div className="cart_item">
                      <div className="cart_img">
                        <a href="#">
                          <img src="/assets/img/s-product/product.jpg" alt="" />
                        </a>
                      </div>
                      <div className="cart_info">
                        <a href="#">
                          JBL Flip 3 Splasroof Portable Bluetooth 2
                        </a>

                        <span className="quantity">Qty: 1</span>
                        <span className="price_cart">$60.00</span>
                      </div>
                      <div className="cart_remove">
                        <a href="#">
                          <i className="ion-android-close"></i>
                        </a>
                      </div>
                    </div>
                    <div className="cart_item">
                      <div className="cart_img">
                        <a href="#">
                          <img
                            src="/assets/img/s-product/product2.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="cart_info">
                        <a href="#">Koss Porta Pro On Ear Headphones </a>
                        <span className="quantity">Qty: 1</span>
                        <span className="price_cart">$69.00</span>
                      </div>
                      <div className="cart_remove">
                        <a href="#">
                          <i className="ion-android-close"></i>
                        </a>
                      </div>
                    </div>
                    <div className="mini_cart_table">
                      <div className="cart_total">
                        <span>Sub total:</span>
                        <span className="price">$138.00</span>
                      </div>
                      <div className="cart_total mt-10">
                        <span>total:</span>
                        <span className="price">$138.00</span>
                      </div>
                    </div>

                    <div className="mini_cart_footer">
                      <div className="cart_button">
                        <a href="cart.html">View cart</a>
                      </div>
                      <div className="cart_button">
                        <a href="checkout.html">Checkout</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NavMenu() {
  return (
    <div className="header_bottom bottom_four sticky-header">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12">
            <div className="main_menu header_position">
              <nav>
                <ul>
                  <li>
                    <Link href="/">
                      <a>home</a>
                    </Link>
                  </li>
                  <li className="mega_items">
                    <Link href="/products">
                      <a>
                        shop<i className="fa fa-angle-down"></i>
                      </a>
                    </Link>
                    <div className="mega_menu">
                      <ul className="mega_menu_inner">
                        <li>
                          <a>Cards</a>
                          <ul>
                            <li>
                              <Link
                                href="/products/[slug]"
                                as="/products/postcards"
                              >
                                <a>Postcards</a>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/products/[slug]"
                                as="/products/business-cards"
                              >
                                <a>Business Cards</a>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/products/[slug]"
                                as="/products/sales-sheets"
                              >
                                <a>Sales Sheets</a>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/products/[slug]"
                                as="/products/car-magnets"
                              >
                                <a>Car Magnets</a>
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">Collateral</a>
                          <ul>
                            <li>
                              <Link
                                href="/products/[slug]"
                                as="/products/flyers"
                              >
                                <a>Flyers</a>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/products/[slug]"
                                as="/products/door-hangers"
                              >
                                <a>Door Hangers</a>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/products/[slug]"
                                as="/products/posters"
                              >
                                <a>Posters</a>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/products/[slug]"
                                as="/products/stickers"
                              >
                                <a>Stickers</a>
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">Brochures</a>
                          <ul>
                            <li>
                              <Link
                                href="/products/[slug]"
                                as="/products/folded-brochures"
                              >
                                <a>Folded Brochures</a>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/products/[slug]"
                                as="/products/one-sided-brochures"
                              >
                                <a>One-Sided Brochures</a>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/products/[slug]"
                                as="/products/booklet-catalogs"
                              >
                                <a>Booklet Catalogs</a>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/products/[slug]"
                                as="/products/calendars"
                              >
                                <a>Calendars</a>
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">Stationery</a>
                          <ul>
                            <li>
                              <Link
                                href="/products/[slug]"
                                as="/products/letterheads"
                              >
                                <a>Letterheads</a>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/products/[slug]"
                                as="/products/envelopes"
                              >
                                <a>Envelopes</a>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/products/[slug]"
                                as="/products/sales-folders"
                              >
                                <a>Sales Folders</a>
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                      <div className="banner_static_menu">
                        <Link href="/products">
                          <a>
                            <img src="/assets/img/bg/banner1.jpg" alt="" />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a href="blog.html">
                      blog<i className="fa fa-angle-down"></i>
                    </a>
                    <ul className="sub_menu pages">
                      <li>
                        <a href="blog-details.html">blog details</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="about.html">about Us</a>
                  </li>
                  <li>
                    <a href="contact.html"> Contact Us</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NavMenuMobile() {
  return (
    <>
      <div className="off_canvars_overlay"></div>
      <div className="Offcanvas_menu">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="canvas_open">
                <span>MENU</span>
                <a>
                  <i className="ion-navicon"></i>
                </a>
              </div>
              <div className="Offcanvas_menu_wrapper">
                <div className="canvas_close">
                  <a href="#">
                    <i className="ion-android-close"></i>
                  </a>
                </div>

                <div className="top_right text-right">
                  <ul>
                    <li className="top_links">
                      <a href="#">
                        <i className="ion-android-person"></i> My Account
                        <i className="ion-ios-arrow-down"></i>
                      </a>
                      <ul className="dropdown_links">
                        <li>
                          <a href="checkout.html">Checkout </a>
                        </li>
                        <li>
                          <a href="my-account.html">My Account </a>
                        </li>
                        <li>
                          <a href="cart.html">Shopping Cart</a>
                        </li>
                        <li>
                          <a href="wishlist.html">Wishlist</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="Offcanvas_follow">
                  <label>Follow Us:</label>
                  <ul className="follow_link">
                    <li>
                      <a href="#">
                        <i className="ion-social-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ion-social-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ion-social-googleplus"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ion-social-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="search-container">
                  <form action="#">
                    <div className="search_box">
                      <input
                        placeholder="Search entire store here ..."
                        type="text"
                      />
                      <button type="submit">
                        <i className="ion-ios-search-strong"></i>
                      </button>
                    </div>
                  </form>
                </div>
                <div id="menu" className="text-left ">
                  <ul className="offcanvas_main_menu">
                    <li className="menu-item-has-children-">
                      <Link href="/">
                        <a>Home</a>
                      </Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link href="/products">
                        <a>
                          Shop
                          <span className="menu-expand">
                            <i className="fa fa-angle-down"></i>
                          </span>
                        </a>
                      </Link>
                      <ul className="sub-menu">
                        <li className="menu-item-has-children">
                          <a href="#">
                            Cards
                            <span className="menu-expand">
                              <i className="fa fa-angle-down"></i>
                            </span>
                          </a>
                          <ul className="sub-menu">
                            <li>
                              <Link
                                href="/products/[slug]"
                                as="/products/business-cards"
                              >
                                <a>Business Cards</a>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/products/[slug]"
                                as="/products/postcards"
                              >
                                <a>Postcards</a>
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="#">
                            Flyers
                            <span className="menu-expand">
                              <i className="fa fa-angle-down"></i>
                            </span>
                          </a>
                          <ul className="sub-menu">
                            <li>
                              <a href="cart.html">cart</a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="#">
                            Brochures
                            <span className="menu-expand">
                              <i className="fa fa-angle-down"></i>
                            </span>
                          </a>
                          <ul className="sub-menu">
                            <li>
                              <a href="product-details.html">product details</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">
                        blog
                        <span className="menu-expand">
                          <i className="fa fa-angle-down"></i>
                        </span>
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="blog.html">blog</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children-">
                      <a href="my-account.html">my account</a>
                    </li>
                    <li className="menu-item-has-children-">
                      <a href="about.html">About Us</a>
                    </li>
                    <li className="menu-item-has-children-">
                      <a href="contact.html"> Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function DiscountArea({ data }) {
  if (!data) {
    return null;
  }

  return (
    <div className="discount_area">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="discount_text">
              <p>
                Save Up To 30% On Print Shop Brand Products{" "}
                <a href="#">Shop Now!</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Breadcrumbs({ data, currentPage = {} }) {
  if (!data) {
    return null;
  }

  const { label: currentPageLabel } = currentPage;

  return (
    <div className="breadcrumbs_area">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="breadcrumb_content">
              <ul>
                {data.map(({ href, label, as }) => (
                  <li key={href} className="menu-link">
                    <Link href={href} as={as}>
                      <a>{label}</a>
                    </Link>
                  </li>
                ))}
                <li>{currentPageLabel}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Menu({ breadcrumbs = {}, discount }) {
  const { data, currentPage } = breadcrumbs;

  return (
    <>
      <TopMenu />
      <MainMenu />
      <NavMenu />
      <NavMenuMobile />
      <DiscountArea data={discount} />
      <Breadcrumbs data={data} currentPage={currentPage} />
    </>
  );
}

export default Menu;
