export default function Footer() {
  return (
    <footer className="main-footer bg-charade pt-70" data-sticky-footer="true">
      <section className="bt-fade-white-015 pt-35 pb-35 mt-50">
        <div className="container">
          <div className="row">
            <div className="lqd-column col-md-6">
              <ul className="lqd-custom-menu reset-ul inline-nav">
                <li>
                  <a href="#">About SPC Miami</a>
                </li>
                {/*
                <li>
                  <a href="#">Volunteer</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                */}
              </ul>
            </div>

            <div className="lqd-column col-md-6 text-md-right">
              <p className="my-0">
                <span>&copy; {new Date().getFullYear()} SPC Miami.</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
