import React from 'react'
import './Friends.scss'

const Friends = () => {
  return (
    <>
      <div className="container">
        <section className="friends">
          <h3 className='friendHeading'>Friend Requests</h3>
          <div className="searchPart">
            <form className="d-flex search ms-4 form-control border-0" role="search">
              <span><i class="fa-solid fa-magnifying-glass"></i></span>
              <input className="form-control me-2 bg-body-tertiary" type="search" placeholder="Search" aria-label="Search" />
            </form>

            <select class="form-select" aria-label="Default select example">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>

            <div className="moreBar">
              <i class="bi bi-three-dots"></i>
            </div>
          </div>

          <div className="friendCards mt-5">
            <div className="card">
              <div className="left d-flex">
                <div className="imgDiv">
                  <img src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721720458/user-list-1_etswkr.png" alt="Laster Barry" />
                </div>
                <div className="for-h3-p">
                  <h3 className='m-0'>Laster Barry</h3>
                  <p className='m-0'>Plying Grand Theft Auto V</p>
                </div>
              </div>
              <div className="right">
                <i class="bi bi-three-dots"></i>
              </div>
            </div>
            <div className="card">
              <div className="left d-flex">
                <div className="imgDiv">
                  <img src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721720458/user-list-1_etswkr.png" alt="Laster Barry" />
                </div>
                <div className="for-h3-p">
                  <h3 className='m-0'>Laster Barry</h3>
                  <p className='m-0'>Plying Grand Theft Auto V</p>
                </div>
              </div>
              <div className="right">
                <i class="bi bi-three-dots"></i>
              </div>
            </div>
            <div className="card">
              <div className="left d-flex">
                <div className="imgDiv">
                  <img src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721720458/user-list-1_etswkr.png" alt="Laster Barry" />
                </div>
                <div className="for-h3-p">
                  <h3 className='m-0'>Laster Barry</h3>
                  <p className='m-0'>Plying Grand Theft Auto V</p>
                </div>
              </div>
              <div className="right">
                <i class="bi bi-three-dots"></i>
              </div>
            </div>
            <div className="card">
              <div className="left d-flex">
                <div className="imgDiv">
                  <img src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721720458/user-list-1_etswkr.png" alt="Laster Barry" />
                </div>
                <div className="for-h3-p">
                  <h3 className='m-0'>Laster Barry</h3>
                  <p className='m-0'>Plying Grand Theft Auto V</p>
                </div>
              </div>
              <div className="right">
                <i class="bi bi-three-dots"></i>
              </div>
            </div>
            <div className="card">
              <div className="left d-flex">
                <div className="imgDiv">
                  <img src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721720458/user-list-1_etswkr.png" alt="Laster Barry" />
                </div>
                <div className="for-h3-p">
                  <h3 className='m-0'>Laster Barry</h3>
                  <p className='m-0'>Plying Grand Theft Auto V</p>
                </div>
              </div>
              <div className="right">
                <i class="bi bi-three-dots"></i>
              </div>
            </div>
            <div className="card">
              <div className="left d-flex">
                <div className="imgDiv">
                  <img src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721720458/user-list-1_etswkr.png" alt="Laster Barry" />
                </div>
                <div className="for-h3-p">
                  <h3 className='m-0'>Laster Barry</h3>
                  <p className='m-0'>Plying Grand Theft Auto V</p>
                </div>
              </div>
              <div className="right">
                <i class="bi bi-three-dots"></i>
              </div>
            </div>
          </div>

          <div className="edit-friends mt-5">
            <h3>Friend Requests</h3>
            <div className="edit-contain">
              <div className="card">
                <div className="left">
                  <div className="imgDiv">
                    <img src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721720458/user-list-3_xkmv4z.png" alt="Fred Emil" />
                  </div>
                  <div className="for-p">
                    <p>Fred Emil</p>
                  </div>
                </div>
                <div className="right">
                  <span className='for-check'><i class="bi bi-check-circle"></i></span>
                  <span className='for-trash'><i class="bi bi-trash"></i></span>
                </div>
              </div>
              <div className="card">
                <div className="left">
                  <div className="imgDiv">
                    <img src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721720458/user-list-3_xkmv4z.png" alt="Fred Emil" />
                  </div>
                  <div className="for-p">
                    <p>Fred Emil</p>
                  </div>
                </div>
                <div className="right">
                  <span className='for-check'><i class="bi bi-check-circle"></i></span>
                  <span className='for-trash'><i class="bi bi-trash"></i></span>
                </div>
              </div>
              <div className="card">
                <div className="left">
                  <div className="imgDiv">
                    <img src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721720458/user-list-3_xkmv4z.png" alt="Fred Emil" />
                  </div>
                  <div className="for-p">
                    <p>Fred Emil</p>
                  </div>
                </div>
                <div className="right">
                  <span className='for-check'><i class="bi bi-check-circle"></i></span>
                  <span className='for-trash'><i class="bi bi-trash"></i></span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

    </>
  )
}

export default Friends