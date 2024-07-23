import React from 'react'
import 'uikit/dist/css/uikit.min.css';
import 'uikit/dist/js/uikit.min.js';
import 'uikit/dist/js/uikit-icons.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Profile.scss';

const Profile = () => {
    return (
        <>
            <div className="container">
                <main className="page-main">
                    <div className="uk-grid" data-uk-grid="">
                        <div className="uk-width-3-4@l uk-width-3-4@m uk-first-column">
                            <div className="uk-grid uk-child-width-2-2@l uk-child-width-2-2@m uk-child-width-1-1@s">
                                <section className="b-post b-post-full b-post-single clearfix Section">
                                    <div className="p-3 bg-white">
                                        <div
                                            className="uk-page-heading uk-page-heading-style-a uk-height-medium uk-height-max-medium uk-flex uk-flex-column uk-flex-center uk-flex-middle uk-background-cover uk-light"
                                            uk-img=""
                                            uk-parallax="bgy: -20"
                                            style={{ backgroundImage: "url('https://pro-theme.com/html/teamhost/assets/img/heading3.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "881px 589px", backgroundPositionY: "calc(-124.5px)" }}>
                                            <div className="fl-hd-cover fl-hd-cover-02">
                                                <span className="decore-lt"></span>
                                                <span className="decore-lb"></span>
                                                <span className="decore-rt"></span>
                                                <span className="decore-rb"></span>
                                            </div>
                                            <div className="fl-hd-avatar avatarBarleyDiv">
                                                <a href="04_profile.html" className="item-avatar">
                                                    <img className="avatar barleyAvatar" width="100" height="100" alt="Profile Photo" src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721404076/user-4_tq7drv.png" />
                                                </a>
                                            </div>
                                            <h1 className="uk-page-heading-h my-0 ">Lester Barry</h1>
                                            <p className="uk-heading-text">4 YEARS, 6 MONTHS AGO</p>
                                        </div>
                                    </div>
                                    <div className="fl-subnav my-4 bg-white">
                                        <ul className="uk-subnav uk-subnav-pill p-3" uk-margin="">
                                            <li className=" uk-first-column"><a href="#"><i className="bi bi-house-door me-2"></i>Overview</a></li>
                                            <li><a href="#"><i className="bi bi-info-circle me-2"></i>Info</a></li>
                                            <li><a href="#"><i className="bi bi-clock-history me-2"></i>Activity</a></li>
                                            <li><a href="#"><i className="bi bi-person-add me-2"></i>Friends</a></li>
                                            <li><a href="#"><i className="bi bi-controller me-2"></i>Groups</a></li>
                                        </ul>
                                    </div>
                                    <div className="entry-main commentContain">
                                        <div className="entry-content bg-white p-5">
                                            <div className="comments_form bg-white commentForm">
                                                <ul className="uk-comment-list p-5 comment-border">
                                                    <li>
                                                        <article className="uk-comment uk-visible-toggle" tabIndex="-1">
                                                            <header className="uk-comment-header uk-position-relative">
                                                                <div className="uk-grid-medium uk-flex-top uk-grid" uk-grid="">
                                                                    <div className="uk-width-auto uk-first-column">
                                                                        <img className="uk-comment-avatar" src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721404076/user-4_tq7drv.png" width="80" height="80" alt="avatar" />
                                                                    </div>
                                                                    <div className="uk-width-expand">
                                                                        <h4 className="uk-comment-title uk-margin-remove"><a className="uk-link-reset" href="#">Lester Barry</a></h4>
                                                                        <p className="uk-comment-meta uk-margin-remove-top"><a className="uk-link-reset" href="#">12 days ago</a></p>
                                                                        <div className="uk-comment-body">
                                                                            <p>Men are simple things. They can survive a whole weekend with only three things: beer, boxer shorts and batteries for the remote control. I can drive 10 miles, walk 50 feet. Turn around and before I know it, I'd be back home. Or would I? I'm not sure but that's just how it is. Sometimes I wonder if I really can. But then I think to myself, maybe I can't. But if I could, that would be good. Maybe it's all a lie?</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </header>
                                                        </article>
                                                    </li>
                                                    <li>
                                                        <article className="uk-comment uk-visible-toggle" tabIndex="-1">
                                                            <header className="uk-comment-header uk-position-relative">
                                                                <div className="uk-grid-medium uk-flex-top uk-grid" uk-grid="">
                                                                    <div className="uk-width-auto uk-first-column">
                                                                        <img className="uk-comment-avatar" src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721404076/user-4_tq7drv.png" width="80" height="80" alt="avatar" />
                                                                    </div>
                                                                    <div className="uk-width-expand">
                                                                        <h4 className="uk-comment-title uk-margin-remove"><a className="uk-link-reset" href="#">Lester Barry</a></h4>
                                                                        <p className="uk-comment-meta uk-margin-remove-top"><a className="uk-link-reset" href="#">17 days ago</a></p>
                                                                        <div className="uk-comment-body">
                                                                            <p>Turn around and before I know it, I'd be back home. Or would I? I'm not sure but that's just how it is. Sometimes I wonder if I really can. But then I think to myself, maybe I can't. But if I could, that would be good. Maybe it's all a lie?</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </header>
                                                        </article>
                                                    </li>
                                                    <li>
                                                        <article className="uk-comment uk-visible-toggle" tabIndex="-1">
                                                            <header className="uk-comment-header uk-position-relative">
                                                                <div className="uk-grid-medium uk-flex-top uk-grid" uk-grid="">
                                                                    <div className="uk-width-auto uk-first-column">
                                                                        <img className="uk-comment-avatar" src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721404076/user-4_tq7drv.png" width="80" height="80" alt="avatar" />
                                                                    </div>
                                                                    <div className="uk-width-expand">
                                                                        <h4 className="uk-comment-title uk-margin-remove"><a className="uk-link-reset" href="#">Lester Barry</a></h4>
                                                                        <p className="uk-comment-meta uk-margin-remove-top"><a className="uk-link-reset" href="#">30 days ago</a></p>
                                                                        <div className="uk-comment-body">
                                                                            <p>Sometimes I wonder if I really can. But then I think to myself, maybe I can't. But if I could, that would be good. Maybe it's all a lie? Sometimes I wonder if I really can. But then I think to myself, maybe I can't. But if I could, that would be good. Maybe it's all a lie?</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </header>
                                                        </article>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="fl-form commentBottomPart p-4" id="respond">
                                                <div className="h3Div border-1">
                                                    <h3 className="box-title">Leave a comment</h3>
                                                </div>
                                                <form className="uk-grid-small uk-grid uk-grid-stack mt-4" uk-grid="">
                                                    <div className="uk-width-1-1 uk-inline uk-first-column textareaDiv">
                                                        <textarea className="uk-textarea" cols="30" rows="5"></textarea>
                                                    </div>
                                                    <div className="uk-width-1-1 uk-inline uk-grid-margin uk-first-column mt-4 sendDiv">
                                                        <button className="uk-button uk-button-default uk-width-1-1 uk-margin-small-bottom">Send Message</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                        <div className="uk-width-1-4@l uk-width-1-4@m right">
                            <aside className="l-sidebar">


                                <div className="fl-gp-box fl-gp-box-single bg-white rightTop">

                                    <div className="fl-cover-single avatarContain">
                                        <div className="fl-gp-info">
                                            <div className="fl-gp-avatar avatarBarleyDiv">
                                                <a href="04_profile.html" className="item-avatar">
                                                    <img className="avatar barleyAvatar" width="100" height="100" alt="Profile Photo" src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721404076/user-4_tq7drv.png" />
                                                </a>
                                            </div>
                                            <div className="fl-gp-title Barry">
                                                <a href="15_group.html" className="bp-gp-home-link season-of-the-witch-home-link LasterBarry">Lester Barry</a>
                                            </div>
                                            <div className="fl-gp-meta usernameDiv">
                                                <div className="group-status">@username</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="fl-gp-footer avatarBottomPart">

                                        <div className="fl-gp-cells d-flex numbers">
                                            <div className="fl-gp-cell-left numberLeft">
                                                <strong className='me-1'>24</strong>
                                                <span>Followers</span>
                                            </div>
                                            <div className="fl-gp-cell-right numberRight">
                                                <strong className='me-1'>12</strong>
                                                <span>Posts</span>
                                            </div>
                                        </div>

                                        <div className="fl-gp-action viewDiv">
                                            <a className="fl-view-profile d-inline-block viewLink" rel="profile" href="04_profile.html">View my profile</a>
                                        </div>

                                    </div>
                                </div>


                                <section className="widget section-sidebar bg-light mt-5 myFriends">
                                    <h3 className="widget-title FriendH3Top"><i class="fa-solid fa-trophy"></i>My Friends</h3>
                                    <div className="widget-content">
                                        <div className="widget-inner FriendContain">
                                            <section className="post-widget clearfix FriendSection">
                                                <div className="post-widget__media"><a href="16_post.html"><img className="img-fluid FriendImg" src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721456405/user-1_ibe0ex.png" alt="foto" /></a></div>
                                                <div className="post-widget__inner FriendDiv">
                                                    <h2 className="post-widget__title FriendH2"><a href="16_post.html  FriendLink">Kristen Oswalt</a></h2>
                                                    <div className="post-widget__date FriendDate">
                                                        <time dateTime="2020-10-27 15:20">Dec 15, 2020</time>
                                                    </div>
                                                </div>
                                            </section>
                                            <section className="post-widget clearfix  FriendSection">
                                                <div className="post-widget__media"><a href="16_post.html"><img className="img-fluid  FriendImg" src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721456405/user-2_g0ndpl.png" alt="foto" /></a></div>
                                                <div className="post-widget__inner  FriendDiv">
                                                    <h2 className="post-widget__title  FriendH2"><a href="16_post.html FriendLink">Emma Stone</a></h2>
                                                    <div className="post-widget__date  FriendDate">
                                                        <time dateTime="2019-10-27 15:20">Jan 15, 2022</time>
                                                    </div>
                                                </div>
                                            </section>
                                            <section className="post-widget clearfix  FriendSection">
                                                <div className="post-widget__media"><a href="16_post.html"><img className="img-fluid  FriendImg" src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721456405/user-3_pmvfrf.png" alt="foto" /></a></div>
                                                <div className="post-widget__inner  FriendDiv">
                                                    <h2 className="post-widget__title  FriendH2"><a href="16_post.html FriendLink">Lester Barry</a></h2>
                                                    <div className="post-widget__date  FriendDate">
                                                        <time dateTime="2019-10-27 15:20">Feb 15, 2021</time>
                                                    </div>
                                                </div>
                                            </section>
                                            <button className="uk-button uk-button-theme-color uk-width-1-1 uk-margin-small-bottom mt-4 FriendViewAll">View All</button>
                                        </div>
                                    </div>
                                </section>


                                <section className="widget section-sidebar bg-white mt-5 groupSection">
                                    <h3 className="widget-title groupH3 p-3"><i class="fa-solid fa-layer-group"></i>My Groups</h3>
                                    <div className="widget-content">
                                        <div className="widget-inner p-4 groupListContain">
                                            <ul className="widget-list list list-mark-4 groupList">
                                                <li className="widget-list__item"><a className="widget-list__link groupLink" href="16_post.html"><i class="fa-solid fa-chevron-right me-3"></i>Fighting games</a></li>
                                                <li className="widget-list__item  mt-2"><a className="widget-list__link groupLink" href="16_post.html"><i class="fa-solid fa-chevron-right me-3"></i>Beat 'em up games</a></li>
                                                <li className="widget-list__item  mt-2"><a className="widget-list__link groupLink" href="16_post.html"><i class="fa-solid fa-chevron-right me-3"></i>Stealth game</a></li>
                                                <li className="widget-list__item  mt-2"><a className="widget-list__link groupLink" href="16_post.html"><i class="fa-solid fa-chevron-right me-3"></i>Action-adventure</a></li>
                                                <li className="widget-list__item  mt-2"><a className="widget-list__link groupLink" href="16_post.html"><i class="fa-solid fa-chevron-right me-3"></i>Survival horror</a></li>
                                                <li className="widget-list__item  mt-2"><a className="widget-list__link groupLink" href="16_post.html"><i class="fa-solid fa-chevron-right me-3"></i>Text adventures</a></li>
                                                <li className="widget-list__item  mt-2"><a className="widget-list__link groupLink" href="16_post.html"><i class="fa-solid fa-chevron-right me-3"></i>Graphic adventures</a></li>
                                                <li className="widget-list__item  mt-2"><a className="widget-list__link groupLink" href="16_post.html"><i class="fa-solid fa-chevron-right me-3"></i>Interactive movie</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </section>
                            </aside>
                        </div>
                    </div>
                </main>
            </div>


        </>
    )
}

export default Profile