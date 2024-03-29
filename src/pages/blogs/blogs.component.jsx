import React from 'react';

import './blogs.styles.scss';

import Container from '../../components/container/container';

const BlogsPage = () => (
    <Container className="blogs">
        <div>
            <a href="https://medium.com/@saurabh.fullstackdev/future-and-new-authentication-techniques-d64d3e8d8d43?source=friends_link&sk=f58d61c680178be534e842853691501f" target="_blank">
                <img alt="leaves" src="assets/img/authentication.png" />
                <h2 className="secondary-heading">
                    Future and New Authentication Techniques
                </h2>
                <h6 className="tertiary-heading">
                Authentication is one of the important aspects of security. But for the past many years, only emails and passwords were the only good way of authentication into apps. And In this fast remote-going world the security hacks cases are increasing. So today in the blog, I want to talk about 4 Future and New Authentication Techniques that truly make the next-gen Authentication. ⚡
                </h6>
                <h6 className="tertiary-heading upload-date">
                    20 July 2020
                </h6>
            </a>
        </div>
        
        <div>
            <a href="https://medium.com/@saurabh.fullstackdev/whats-new-in-mongodb-atlas-2020-b19242fff78?sk=d959bd999ab3c838c6beda1978346274" target="_blank">
                <img alt="leaves" src="assets/img/atlas.png" />
                <h2 className="secondary-heading">
                    What's new in MongoDB Atlas 2020
                </h2>
                <h6 className="tertiary-heading">
                This year they announced many wanted updates, and to be honest there are dozens of cool things coming to MongoDB platform 👍. In this blog I only want to cover what new is coming and arrived on MongoDB Atlas. So, if you are a Atlas developer this is a good place to get overview what is new in MongoDB Atlas 2020.
                </h6>
                <h6 className="tertiary-heading upload-date">
                    24 June 2020
                </h6>
            </a>
        </div>

        <div>
            <a href="https://medium.com/@saurabh.fullstackdev/mongodb-realm-853ccf909a84" target="_blank">
                <img alt="leaves" src="assets/img/leaves.png" />
                <h2 className="secondary-heading">
                    MongoDB Realm
                </h2>
                <h6 className="tertiary-heading">
                Few week's ago, I watched the MongoDB Live 2020. A event MongoDB organize every year about their updates, keynotes, more.. . So, that was cool, I enjoyed the developer chat, sessions and obviously keynotes. The MongoDB devs are pushing forward to make MongoDB the best database platform in all. (like it)
                </h6>
                <h6 className="tertiary-heading upload-date">
                    16 June 2020
                </h6>
            </a>
        </div>

    </Container>
)

export default BlogsPage;
