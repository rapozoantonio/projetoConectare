import React from 'react';

const SupportBanner =()=>{
    return(
        <section className="support_home_area">
            <div className="banner_top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h2 className="f_p f_size_40 l_height60 wow fadeInUp" data-wow-delay="0.3s">Em Construção...<br/><span className="f_700"></span> </h2>
                            {/* <p className="f_size_18 l_height30 wow fadeInUp" data-wow-delay="0.5s">Duis aute irure dolor in reprehenderit in<br/>voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p> */}
                            <form className="mailchimp wow fadeInUp" data-wow-delay="0.6s" method="post">
                                <div className="input-group subcribes">
                                    {/* <input type="text" name="EMAIL" className="form-control memail" placeholder="saasland@gmail.com"/> */}
                                    {/* <button className="btn btn_submit f_size_15 f_500" type="submit">Get Started</button> */}
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="support_home_img wow fadeInUp" data-wow-delay="0.9s">
                        <img src={require ("../../img/new-home/banner.png")} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default SupportBanner;