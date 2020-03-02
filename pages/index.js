import Layout from "../components/layout/layout";

function HomePage() {
  const title = "Special Preaching Campaign | Haitain Creole | South Florida";

  return (
    <Layout title={title}>
      <main id="content" className="content">
        <section
          className="vc_row bg-cover bg-center fullheight d-flex align-items-center py-5"
          data-row-bg="/img/bg_coming_soon.jpg"
        >
          <span className="row-bg-loader"></span>

          <div className="container">
            <div className="row d-flex flex-wrap align-items-center">
              <div
                className="lqd-column col-md-10 faded-bg-mauve p-5"
                data-custom-animations="true"
                data-ca-options='{ "triggerHandler":"inview", "animationTarget":"all-childs", "duration":"1200", "delay":"150", "easing":"easeOutQuint", "direction":"forward", "initValues":{"translateY":60, "translateZ":-160, "rotateX":-84, "opacity":0}, "animations":{"translateY":0, "translateZ":0, "rotateX":0, "opacity":1} }'
              >
                <div className="ld-fancy-heading mask-text">
                  <p
                    className="text-white font-size-24"
                    data-split-text="true"
                    data-split-options='{ "type": "words" }'
                  >
                    Something Special is Coming to South Florida!
                  </p>
                </div>

                <div className="ld-fancy-heading">
                  <h2
                    className="text-white ltr-sp--015"
                    data-fittext="true"
                    data-fittext-options='{"compressor":0.675,"maxFontSize":"70","minFontSize":"45"}'
                    data-split-text="true"
                    data-split-options='{ "type": "lines" }'
                    data-text-rotator="true"
                  >
                    <div className="ld-fh-txt">
                      <div className="font-size-1-25x- mb-25">
                        Special Preaching Campaign
                      </div>
                      <div className="txt-rotate-keywords font-size-42">
                        <span className="keyword active">
                          Metropolitan
                          <span className="hidden-xs">&nbsp;Witnessing</span>
                        </span>
                        <span className="keyword">
                          <span className="hidden-xs">Cultural &nbsp;</span>
                          Entertainment
                        </span>
                        <span className="keyword">Haitian Food</span>
                        <span className="keyword">Sandy Beaches</span>
                      </div>
                    </div>
                  </h2>
                </div>

                <div className="ld-fancy-heading mask-text">
                  <p
                    className="text-white font-size-21"
                    data-split-text="true"
                    data-split-options='{ "type": "words" }'
                  >
                    <span className="ld-fh-txt">
                      <span className="opacity-06--">
                        <span className="text-turquoise">Preach.</span>
                        <span className="text-tertiary">Meet friends.</span>
                        <span className="text-secondary">
                          Enjoy tasty food.
                        </span>
                      </span>
                    </span>
                  </p>

                  <div className="d-flex justify-content-end">
                    <span className="font-size-28 text-white">June 2020</span>
                  </div>
                </div>
              </div>

              <div
                className="lqd-column col-md-2 text-left text-md-center"
                data-custom-animations="true"
                data-ca-options='{"triggerHandler":"inview","animationTarget":"all-childs","duration":"1200","startDelay":"3500","delay":100,"easing":"easeOutQuint","direction":"forward","initValues":{"scaleX":0.25,"scaleY":0.25,"opacity":0},"animations":{"scaleX":1,"scaleY":1,"opacity":1}}'
              >
                {/*
                <a
                  href="#"
                  className="btn btn-solid semi-round btn-secondary"
                  data-localscroll="true"
                  data-localscroll-options='{"scrollBelowSection": true}'
                >
                  <span className="btn-txt font-size-18">Volunteer</span>
                </a>
                */}
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default HomePage;
