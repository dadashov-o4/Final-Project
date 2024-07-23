import React from 'react'
import './Favourites.scss'

const Favourites = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="leftPart col-lg-8">
            <h3 className='pageHeading'>My Favourites</h3>
            <div className="searchSection bg-white">
              <form className="d-flex search ms-4 form-control border-0" role="search">
                <span><i class="fa-solid fa-magnifying-glass"></i></span>
                <input className="form-control me-2 bg-body-tertiary" type="search" placeholder="Search" aria-label="Search" />
                <span><i class="fa-solid fa-microphone"></i></span>
              </form>
              <div className="selectSection form-control border-0">
                <select className="form-select bg-body-tertiary " aria-label="Default select example">
                  <option selected >Open this select menu</option>
                  <option value="1" >One</option>
                  <option value="2" >Two</option>
                  <option value="3" >Three</option>
                </select>

                <select className="form-select bg-body-tertiary" aria-label="Default select example">
                  <option selected >Open this select menu</option>
                  <option value="1" >One</option>
                  <option value="2" >Two</option>
                  <option value="3" >Three</option>
                </select>

                <select className="form-select bg-body-tertiary" aria-label="Default select example">
                  <option selected >Open this select menu</option>
                  <option value="1" >One</option>
                  <option value="2" >Two</option>
                  <option value="3" >Three</option>
                </select>
              </div>

            </div>

            <div className="cardsPart mt-3">
              <div className="Card">
                <div className='ImgContain'>
                  <div className='ImgDiv '>
                    <img className='Img' src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721629398/gr1_gkul4z.jpg" alt="Season of the Witch" />

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
                  <button><a href="#">Join Group</a></button>
                </div>
              </div>

              <div className="Card">
                <div className='ImgContain'>
                  <div className='ImgDiv '>
                    <img className='Img' src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721629398/gr2_w0bnfg.jpg" alt="Season of the Witch" />

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
                  <button><a href="#">Join Group</a></button>
                </div>
              </div>

              <div className="Card">
                <div className='ImgContain'>
                  <div className='ImgDiv '>
                    <img className='Img' src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721629398/gr5_akq4w0.jpg" alt="Season of the Witch" />

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
                  <button><a href="#">Join Group</a></button>
                </div>
              </div>

              <div className="Card">
                <div className='ImgContain'>
                  <div className='ImgDiv '>
                    <img className='Img' src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721629398/gr6_gm0tzk.jpg" alt="Season of the Witch" />

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
                  <button><a href="#">Join Group</a></button>
                </div>
              </div>

              <div className="Card">
                <div className='ImgContain'>
                  <div className='ImgDiv '>
                    <img className='Img' src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721629398/gr7_o2hv4h.jpg" alt="Season of the Witch" />

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
                  <button><a href="#">Join Group</a></button>
                </div>
              </div>

              <div className="Card">
                <div className='ImgContain'>
                  <div className='ImgDiv '>
                    <img className='Img' src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721645057/gr8_rrsvor.jpg" alt="Season of the Witch" />

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
                  <button><a href="#">Join Group</a></button>
                </div>
              </div>


            </div>
          </div>
          <div className="rightPart col-lg-4">
            <h3 className='pageHeading'>My Lists</h3>
            <div className="cardsPart">
              <div className="Card mb-3">
                <div className="cardLeftPart">
                  <div className='avatar'> <p>S</p></div>
                  <div className="forH4"><h4>Strategy Games</h4>
                  </div>
                </div>
                <div className="cardRightPart me-3"><i class="bi bi-three-dots"></i></div>
              </div>
              <div className="Card mb-3">
                <div className="cardLeftPart">
                  <div className='avatar'> <p>S</p></div>
                  <div className="forH4"><h4>Strategy Games</h4>
                  </div>
                </div>
                <div className="cardRightPart me-3"><i class="bi bi-three-dots"></i></div>
              </div>
              <div className="Card mb-3">
                <div className="cardLeftPart">
                  <div className='avatar'> <p>S</p></div>
                  <div className="forH4"><h4>Strategy Games</h4>
                  </div>
                </div>
                <div className="cardRightPart me-3"><i class="bi bi-three-dots"></i></div>
              </div>
              <div className="Card mb-3">
                <div className="cardLeftPart">
                  <div className='avatar'> <p>S</p></div>
                  <div className="forH4"><h4>Strategy Games</h4>
                  </div>
                </div>
                <div className="cardRightPart me-3"><i class="bi bi-three-dots"></i></div>
              </div>
              <div className="Card">
                <div className="cardLeftPart">
                  <div className='avatar'> <p>S</p></div>
                  <div className="forH4"><h4>Strategy Games</h4>
                  </div>
                </div>
                <div className="cardRightPart me-3"><i class="bi bi-three-dots"></i></div>
              </div>
              <div className="CardAdd">
                <p><i class="bi bi-plus-square me-2"></i>Create New List</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Favourites