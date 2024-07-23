import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './MainPart.scss';
import { Autoplay, Navigation, Pagination, History } from 'swiper/modules';



const MainPart = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className='recommendations col-lg-7'>
            <h3 className='recommendH3'>Recommended Events</h3>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={true}
              navigation={true}
              loop={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="SwiperRecommend"
            >
              <SwiperSlide>
                <div className="recommendContain">
                  <div className="recommendImg">
                    <img src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721629398/t1_ui0uud.jpg" alt="Tournament 18 april" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="recommendContain">
                  <div className="recommendImg">
                    <img src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721629398/t2_ekgrrq.jpg" alt="Tournament 18 april" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="recommendContain">
                  <div className="recommendImg">
                    <img src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721629398/t1_ui0uud.jpg" alt="Tournament 18 april" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="recommendContain">
                  <div className="recommendImg">
                    <img src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721629398/t2_ekgrrq.jpg" alt="Tournament 18 april" />
                  </div>
                </div>
              </SwiperSlide>

            </Swiper>
          </div>


          <div className="archive col-lg-5">
            <h3 className='archiveH3'>News Archive</h3>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              loop={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="SwiperArchive"
            >
              <SwiperSlide className='archiveSlideContain'>
                <div className="archiveContain">
                  <div className="archiveImg">
                    <img src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721629399/trending2_egf3rr.jpg" alt="Cyber Games" />
                  </div>

                  <div className="archiveAbout">
                    <h3>Cyber Games</h3>
                    <p>Warring factions have brought the Origin System to the brink of destruction.</p>
                    <button><a href="#"> </a> View More</button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide  className='archiveSlideContain'>
                <div className="archiveContain">
                  <div className="archiveImg">
                    <img src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721629399/trending3_tfukcq.jpg" alt="Game of Thrones" />
                  </div>

                  <div className="archiveAbout">
                    <h3>Game of Thrones</h3>
                    <p>Warring factions have brought the Origin System to the brink of destruction.</p>
                    <button><a href="#"> </a> View More</button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide  className='archiveSlideContain'>
                <div className="archiveContain">
                  <div className="archiveImg">
                    <img src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721629399/trending_l8mw22.jpg" alt="Historical Games" />
                  </div>

                  <div className="archiveAbout">
                    <h3>Historical Games</h3>
                    <p>Warring factions have brought the Origin System to the brink of destruction.</p>
                    <button><a href="#"> </a> View More</button>
                  </div>
                </div>
              </SwiperSlide>

            </Swiper>
          </div>
        </div>


        <div className="row  justify-content-center">
          <div className="communities col-11 ">
            <h3 className='communnityH3'> Our Communities</h3>
            <Swiper
              slidesPerView={2}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="SwiperCommunity bg-transparent"
            >
              <SwiperSlide className=' communitySlideContain me-4 bg-white'>
                <div className='communityImgContain'>
                  <div className='communnityImgDiv '>
                    <img className='communnityImg' src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721629398/gr1_gkul4z.jpg" alt="Season of the Witch" />

                    <div className='textOverlay'>
                      <h2>Season of the Witch</h2>
                      <p> <i class="bi bi-globe me-2"></i>Private of the Group</p>
                    </div>
                  </div>
                </div>
                <div className='numberDiv'>
                  <div className='posts'>
                    <h2>235</h2>
                    <p>Posts</p>
                  </div>
                  <div className='members'>
                    <h2>678</h2>
                    <p>Members</p>
                  </div>
                </div>
                <div className="buttonDiv bg-transparent mt-3">
                  <p className='m-1'>Latest active 2 months ago</p>
                  <button><a href="#">Join Group</a></button>
                </div>
              </SwiperSlide>


              <SwiperSlide className=' communitySlideContain me-4 bg-white'>
                <div className='communityImgContain'>
                  <div className='communnityImgDiv'>
                    <img className='communnityImg' src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721629398/gr2_w0bnfg.jpg" alt="Season of the Witch" />
                    <div className='textOverlay'>
                      <h2>Tourist Attractions</h2>
                      <p> <i class="bi bi-globe me-2"></i>Private of the Group</p>
                    </div>
                  </div>
                </div>
                <div className='numberDiv'>
                  <div className='posts'>
                    <h2>235</h2>
                    <p>Posts</p>
                  </div>
                  <div className='members'>
                    <h2>678</h2>
                    <p>Members</p>
                  </div>
                </div>
                <div className="buttonDiv bg-transparent mt-3">
                  <p className='m-1'>Latest active 2 months ago</p>
                  <button><a href="#">Manage Group</a></button>
                </div>
              </SwiperSlide>


              <SwiperSlide className=' communitySlideContain me-4 bg-white'>
                <div className='communityImgContain'>
                  <div className='communnityImgDiv'>
                    <img className='communnityImg' src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721629398/gr4_w9thvc.jpg" alt="Season of the Witch" />
                    <div className='textOverlay'>
                      <h2>Worldwide Cities</h2>
                      <p> <i class="bi bi-globe me-2"></i>Private of the Group</p>
                    </div>
                  </div>
                </div>
                <div className='numberDiv'>
                  <div className='posts'>
                    <h2>235</h2>
                    <p>Posts</p>
                  </div>
                  <div className='members'>
                    <h2>678</h2>
                    <p>Members</p>
                  </div>
                </div>
                <div className="buttonDiv bg-transparent mt-3">
                  <p className='m-1'>Latest active 2 months ago</p>
                  <button><a href="#">Join Group</a></button>
                </div>
              </SwiperSlide>


              <SwiperSlide className=' communitySlideContain me-4 bg-white'>
                <div className='communityImgContain'>
                  <div className='communnityImgDiv'>
                    <img className='communnityImg' src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721629398/gr5_akq4w0.jpg" alt="Season of the Witch" />
                    <div className='textOverlay'>
                      <h2>Developers Club</h2>
                      <p> <i class="bi bi-globe me-2"></i>Private of the Group</p>
                    </div>
                  </div>
                </div>
                <div className='numberDiv'>
                  <div className='posts'>
                    <h2>235</h2>
                    <p>Posts</p>
                  </div>
                  <div className='members'>
                    <h2>678</h2>
                    <p>Members</p>
                  </div>
                </div>
                <div className="buttonDiv bg-transparent mt-3">
                  <p className='m-1'>Latest active 2 months ago</p>
                  <button><a href="#">Join Group</a></button>
                </div>
              </SwiperSlide>


              <SwiperSlide className=' communitySlideContain me-4 bg-white'>
                <div className='communityImgContain'>
                  <div className='communnityImgDiv'>
                    <img className='communnityImg' src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721629398/gr6_gm0tzk.jpg" alt="Season of the Witch" />
                    <div className='textOverlay'>
                      <h2>Tourist Attractions</h2>
                      <p> <i class="bi bi-globe me-2"></i>Private of the Group</p>
                    </div>

                  </div>
                </div>
                <div className='numberDiv'>
                  <div className='posts'>
                    <h2>235</h2>
                    <p>Posts</p>
                  </div>
                  <div className='members'>
                    <h2>678</h2>
                    <p>Members</p>
                  </div>
                </div>
                <div className="buttonDiv bg-transparent mt-3">
                  <p className='m-1'>Latest active 2 months ago</p>
                  <button><a href="#">Join Group</a></button>
                </div>
              </SwiperSlide>


              <SwiperSlide className=' communitySlideContain me-4 bg-white'>
                <div className='communityImgContain'>
                  <div className='communnityImgDiv'>
                    <img className='communnityImg' src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721629398/gr7_o2hv4h.jpg" alt="Season of the Witch" />
                    <div className='textOverlay'>
                      <h2>Worldwide Cities</h2>
                      <p> <i class="bi bi-globe me-2"></i>Private of the Group</p>
                    </div>
                  </div>
                </div>
                <div className='numberDiv'>
                  <div className='posts'>
                    <h2>235</h2>
                    <p>Posts</p>
                  </div>
                  <div className='members'>
                    <h2>678</h2>
                    <p>Members</p>
                  </div>
                </div>
                <div className="buttonDiv bg-transparent mt-3">
                  <p className='m-1'>Latest active 2 months ago</p>
                  <button><a href="#">Join Group</a></button>
                </div>
              </SwiperSlide>


              <SwiperSlide className=' communitySlideContain me-4 bg-white'>
                <div className='communityImgContain'>
                  <div className='communnityImgDiv'>
                    <img className='communnityImg' src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721645057/gr8_rrsvor.jpg" alt="Season of the Witch" />
                    <div className='textOverlay'>
                      <h2>Season of the Witch</h2>
                      <p> <i class="bi bi-globe me-2"></i>Private of the Group</p>
                    </div>
                  </div>
                </div>
                <div className='numberDiv'>
                  <div className='posts'>
                    <h2>235</h2>
                    <p>Posts</p>
                  </div>
                  <div className='members'>
                    <h2>678</h2>
                    <p>Members</p>
                  </div>
                </div>
                <div className="buttonDiv bg-transparent mt-3">
                  <p className='m-1'>Latest active 2 months ago</p>
                  <button><a href="#">Request Membership</a></button>
                </div>
              </SwiperSlide>

            </Swiper>
          </div>
        </div>


        <div className="group">
          <h3 className='groupH3'> Popular Groups</h3>
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            loop={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide className='groupSlideContain'>
              <div className='groupContain'>
                <div className='groupTop'>
                  <div className='leftPart'>
                    <h2>Season of the Witch</h2>
                    <p>Public Group</p>
                  </div>
                  <div className='rightPart'>
                    <div>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star"></i>
                    </div>
                    <p>756 Reviews</p>
                  </div>
                </div>
                <div className='groupBottom'>
                  <div className='leftPart'>
                    <button><a href="#">Read More</a></button>
                  </div>
                  <div className='rightPart'>
                    <div className='avatarWrapper'>
                      <img className='Avatars' src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721456405/user-1_ibe0ex.png" alt="Kristen Oswalt" />
                    </div>
                    <div className='avatarWrapper'>
                      <img className='Avatars' src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721456405/user-2_g0ndpl.png" alt="Emma Stone" />
                    </div>
                    <div className='avatarWrapper'>
                      <img className='Avatars' src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721456405/user-3_pmvfrf.png" alt="Laster Barry" />
                    </div>
                    <div className='avatarWrapper'>
                      <img className='Avatars' src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721404076/user-4_tq7drv.png" alt="Laster Barry" />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className='groupSlideContain'>
              <div className='groupContain'>
                <div className='groupTop'>
                  <div className='leftPart'>
                    <h2>Season of the Witch</h2>
                    <p>Public Group</p>
                  </div>
                  <div className='rightPart'>
                    <div>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star"></i>
                    </div>
                    <p>756 Reviews</p>
                  </div>
                </div>
                <div className='groupBottom'>
                  <div className='leftPart'>
                    <button><a href="#">Read More</a></button>
                  </div>
                  <div className='rightPart'>
                    <div className='avatarWrapper'>
                      <img className='Avatars' src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721456405/user-1_ibe0ex.png" alt="Kristen Oswalt" />
                    </div>
                    <div className='avatarWrapper'>
                      <img className='Avatars' src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721456405/user-2_g0ndpl.png" alt="Emma Stone" />
                    </div>
                    <div className='avatarWrapper'>
                      <img className='Avatars' src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721456405/user-3_pmvfrf.png" alt="Laster Barry" />
                    </div>
                    <div className='avatarWrapper'>
                      <img className='Avatars' src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721404076/user-4_tq7drv.png" alt="Laster Barry" />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className='groupSlideContain'>
              <div className='groupContain'>
                <div className='groupTop'>
                  <div className='leftPart'>
                    <h2>Season of the Witch</h2>
                    <p>Public Group</p>
                  </div>
                  <div className='rightPart'>
                    <div>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star"></i>
                    </div>
                    <p>756 Reviews</p>
                  </div>
                </div>
                <div className='groupBottom'>
                  <div className='leftPart'>
                    <button><a href="#">Read More</a></button>
                  </div>
                  <div className='rightPart'>
                    <div className='avatarWrapper'>
                      <img className='Avatars' src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721456405/user-1_ibe0ex.png" alt="Kristen Oswalt" />
                    </div>
                    <div className='avatarWrapper'>
                      <img className='Avatars' src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721456405/user-2_g0ndpl.png" alt="Emma Stone" />
                    </div>
                    <div className='avatarWrapper'>
                      <img className='Avatars' src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721456405/user-3_pmvfrf.png" alt="Laster Barry" />
                    </div>
                    <div className='avatarWrapper'>
                      <img className='Avatars' src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721404076/user-4_tq7drv.png" alt="Laster Barry" />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className='groupSlideContain'>
              <div className='groupContain'>
                <div className='groupTop'>
                  <div className='leftPart'>
                    <h2>Season of the Witch</h2>
                    <p>Public Group</p>
                  </div>
                  <div className='rightPart'>
                    <div>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star"></i>
                    </div>
                    <p>756 Reviews</p>
                  </div>
                </div>
                <div className='groupBottom'>
                  <div className='leftPart'>
                    <button><a href="#">Read More</a></button>
                  </div>
                  <div className='rightPart'>
                    <div className='avatarWrapper'>
                      <img className='Avatars' src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721456405/user-1_ibe0ex.png" alt="Kristen Oswalt" />
                    </div>
                    <div className='avatarWrapper'>
                      <img className='Avatars' src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721456405/user-2_g0ndpl.png" alt="Emma Stone" />
                    </div>
                    <div className='avatarWrapper'>
                      <img className='Avatars' src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721456405/user-3_pmvfrf.png" alt="Laster Barry" />
                    </div>
                    <div className='avatarWrapper'>
                      <img className='Avatars' src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721404076/user-4_tq7drv.png" alt="Laster Barry" />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className='groupSlideContain'>
              <div className='groupContain'>
                <div className='groupTop'>
                  <div className='leftPart'>
                    <h2>Season of the Witch</h2>
                    <p>Public Group</p>
                  </div>
                  <div className='rightPart'>
                    <div>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star"></i>
                    </div>
                    <p>756 Reviews</p>
                  </div>
                </div>
                <div className='groupBottom'>
                  <div className='leftPart'>
                    <button><a href="#">Read More</a></button>
                  </div>
                  <div className='rightPart'>
                    <div className='avatarWrapper'>
                      <img className='Avatars' src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721456405/user-1_ibe0ex.png" alt="Kristen Oswalt" />
                    </div>
                    <div className='avatarWrapper'>
                      <img className='Avatars' src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721456405/user-2_g0ndpl.png" alt="Emma Stone" />
                    </div>
                    <div className='avatarWrapper'>
                      <img className='Avatars' src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721456405/user-3_pmvfrf.png" alt="Laster Barry" />
                    </div>
                    <div className='avatarWrapper'>
                      <img className='Avatars' src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721404076/user-4_tq7drv.png" alt="Laster Barry" />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>



          </Swiper>
        </div>

        <div className="store">
          <h3 className='storeH3'>Our Store</h3>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            loop={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="SwiperStore"
          >

            <SwiperSlide className="StoreSlideContain">
              <div className="card border-0 p-2 cardContain" style={{ width: '18rem' }}>
                <img src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721657271/game-4_dobm79.jpg" className="card-img-top cardImg" alt="Team Host" />
                <div className="card-body">
                  <h4 className="card-title m-0"> Reckoning and Freedom</h4>
                  <p className="card-text mt-1 mb-2">Strategy</p>
                  <div className="card-text d-flex rating">
                    <span><p className='me-2 firstP'>4.1</p></span>
                    <span><i class="bi bi-star-fill me-2"></i></span>
                    <span><p className='ms-2 secondP'>$49.99</p></span>
                  </div>
                  <div className="bottomPart">
                    <div className="leftPart">
                      <i class="bi bi-windows me-2"></i>
                      <i class="bi bi-apple"></i>
                    </div>
                    <div className='rightPart'>
                      <div className='avatarWrapper'>
                        <img className='Avatars' src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721456405/user-1_ibe0ex.png" alt="Kristen Oswalt" />
                      </div>
                      <div className='avatarWrapper'>
                        <img className='Avatars' src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721456405/user-2_g0ndpl.png" alt="Emma Stone" />
                      </div>
                      <div className='avatarWrapper'>
                        <img className='Avatars' src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721456405/user-3_pmvfrf.png" alt="Laster Barry" />
                      </div>
                      <div className='avatarWrapper'>
                        <img className='Avatars' src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721404076/user-4_tq7drv.png" alt="Laster Barry" />
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="StoreSlideContain">
              <div className="card border-0 p-2 cardContain" style={{ width: '18rem' }}>
                <img src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721657271/game-5_d6g9bh.jpg" className="card-img-top cardImg" alt="Team Host" />
                <div className="card-body">
                  <h4 className="card-title m-0"> Reckoning and Freedom</h4>
                  <p className="card-text mt-1 mb-2">Strategy</p>
                  <div className="card-text d-flex rating">
                    <span><p className='me-2 firstP'>4.1</p></span>
                    <span><i class="bi bi-star-fill me-2"></i></span>
                    <span><p className='ms-2 secondP'>$49.99</p></span>
                  </div>
                  <div className="bottomPart">
                    <div className="leftPart">
                      <i class="bi bi-windows me-2"></i>
                      <i class="bi bi-apple"></i>
                    </div>
                    <div className='rightPart'>
                      <div className='avatarWrapper'>
                        <img className='Avatars' src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721456405/user-1_ibe0ex.png" alt="Kristen Oswalt" />
                      </div>
                      <div className='avatarWrapper'>
                        <img className='Avatars' src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721456405/user-2_g0ndpl.png" alt="Emma Stone" />
                      </div>
                      <div className='avatarWrapper'>
                        <img className='Avatars' src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721456405/user-3_pmvfrf.png" alt="Laster Barry" />
                      </div>
                      <div className='avatarWrapper'>
                        <img className='Avatars' src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721404076/user-4_tq7drv.png" alt="Laster Barry" />
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="StoreSlideContain">
              <div className="card border-0 p-2 cardContain" style={{ width: '18rem' }}>
                <img src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721657270/game-2_kjffaq.jpg" className="card-img-top cardImg" alt="Team Host" />
                <div className="card-body">
                  <h4 className="card-title m-0"> Reckoning and Freedom</h4>
                  <p className="card-text mt-1 mb-2">Strategy</p>
                  <div className="card-text d-flex rating">
                    <span><p className='me-2 firstP'>4.1</p></span>
                    <span><i class="bi bi-star-fill me-2"></i></span>
                    <span><p className='ms-2 secondP'>$49.99</p></span>
                  </div>
                  <div className="bottomPart">
                    <div className="leftPart">
                      <i class="bi bi-windows me-2"></i>
                      <i class="bi bi-apple"></i>
                    </div>
                    <div className='rightPart'>
                      <div className='avatarWrapper'>
                        <img className='Avatars' src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721456405/user-1_ibe0ex.png" alt="Kristen Oswalt" />
                      </div>
                      <div className='avatarWrapper'>
                        <img className='Avatars' src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721456405/user-2_g0ndpl.png" alt="Emma Stone" />
                      </div>
                      <div className='avatarWrapper'>
                        <img className='Avatars' src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721456405/user-3_pmvfrf.png" alt="Laster Barry" />
                      </div>
                      <div className='avatarWrapper'>
                        <img className='Avatars' src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721404076/user-4_tq7drv.png" alt="Laster Barry" />
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="StoreSlideContain">
              <div className="card border-0 p-2 cardContain" style={{ width: '18rem' }}>
                <img src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721657270/game-3_yddfbe.jpg" className="card-img-top cardImg" alt="Team Host" />
                <div className="card-body">
                  <h4 className="card-title m-0"> Reckoning and Freedom</h4>
                  <p className="card-text mt-1 mb-2">Strategy</p>
                  <div className="card-text d-flex rating">
                    <span><p className='me-2 firstP'>4.1</p></span>
                    <span><i class="bi bi-star-fill me-2"></i></span>
                    <span><p className='ms-2 secondP'>$49.99</p></span>
                  </div>
                  <div className="bottomPart">
                    <div className="leftPart">
                      <i class="bi bi-windows me-2"></i>
                      <i class="bi bi-apple"></i>
                    </div>
                    <div className='rightPart'>
                      <div className='avatarWrapper'>
                        <img className='Avatars' src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721456405/user-1_ibe0ex.png" alt="Kristen Oswalt" />
                      </div>
                      <div className='avatarWrapper'>
                        <img className='Avatars' src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721456405/user-2_g0ndpl.png" alt="Emma Stone" />
                      </div>
                      <div className='avatarWrapper'>
                        <img className='Avatars' src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721456405/user-3_pmvfrf.png" alt="Laster Barry" />
                      </div>
                      <div className='avatarWrapper'>
                        <img className='Avatars' src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721404076/user-4_tq7drv.png" alt="Laster Barry" />
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="StoreSlideContain">
              <div className="card border-0 p-2 cardContain" style={{ width: '18rem' }}>
                <img src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721657270/game-1_doithb.jpg" className="card-img-top cardImg" alt="Team Host" />
                <div className="card-body">
                  <h4 className="card-title m-0"> Reckoning and Freedom</h4>
                  <p className="card-text mt-1 mb-2">Strategy</p>
                  <div className="card-text d-flex rating">
                    <span><p className='me-2 firstP'>4.1</p></span>
                    <span><i class="bi bi-star-fill me-2"></i></span>
                    <span><p className='ms-2 secondP'>$49.99</p></span>
                  </div>
                  <div className="bottomPart">
                    <div className="leftPart">
                      <i class="bi bi-windows me-2"></i>
                      <i class="bi bi-apple"></i>
                    </div>
                    <div className='rightPart'>
                      <div className='avatarWrapper'>
                        <img className='Avatars' src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721456405/user-1_ibe0ex.png" alt="Kristen Oswalt" />
                      </div>
                      <div className='avatarWrapper'>
                        <img className='Avatars' src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721456405/user-2_g0ndpl.png" alt="Emma Stone" />
                      </div>
                      <div className='avatarWrapper'>
                        <img className='Avatars' src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721456405/user-3_pmvfrf.png" alt="Laster Barry" />
                      </div>
                      <div className='avatarWrapper'>
                        <img className='Avatars' src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721404076/user-4_tq7drv.png" alt="Laster Barry" />
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="StoreSlideContain">
              <div className="card border-0 p-2 cardContain" style={{ width: '18rem' }}>
                <img src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721657271/game-4_dobm79.jpg" className="card-img-top cardImg" alt="Team Host" />
                <div className="card-body">
                  <h4 className="card-title m-0"> Reckoning and Freedom</h4>
                  <p className="card-text mt-1 mb-2">Strategy</p>
                  <div className="card-text d-flex rating">
                    <span><p className='me-2 firstP'>4.1</p></span>
                    <span><i class="bi bi-star-fill me-2"></i></span>
                    <span><p className='ms-2 secondP'>$49.99</p></span>
                  </div>
                  <div className="bottomPart">
                    <div className="leftPart">
                      <i class="bi bi-windows me-2"></i>
                      <i class="bi bi-apple"></i>
                    </div>
                    <div className='rightPart'>
                      <div className='avatarWrapper'>
                        <img className='Avatars' src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721456405/user-1_ibe0ex.png" alt="Kristen Oswalt" />
                      </div>
                      <div className='avatarWrapper'>
                        <img className='Avatars' src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721456405/user-2_g0ndpl.png" alt="Emma Stone" />
                      </div>
                      <div className='avatarWrapper'>
                        <img className='Avatars' src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721456405/user-3_pmvfrf.png" alt="Laster Barry" />
                      </div>
                      <div className='avatarWrapper'>
                        <img className='Avatars' src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721404076/user-4_tq7drv.png" alt="Laster Barry" />
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </SwiperSlide>
            
          </Swiper>
        </div>

      </div>
    </>
  )
}

export default MainPart