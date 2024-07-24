import React, { useState } from 'react'
import './Help.scss'

const Help = () => {
  const [isSearching, setIsSearching] = useState(false);

  const handleInputChange = (e) => {
    setIsSearching(e.target.value.length > 0);
  };
  return (
    <>

      <div className="container">
        <section className="help-section">
          <div className="helpPartContain">
            <div className="left-part">
              <div className="tittle">
                <h3>Help</h3>
              </div>
              <div className="searchPart">
                <form className="d-flex search ms-4 border-0 ms-0" role="search">
                  <div className="search-container d-flex align-items-center">
                    <input
                      className="form-control me-2 bg-body-tertiary"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                      onChange={handleInputChange}
                    />
                    {!isSearching && (
                      <span>
                        <i className="fa-solid fa-magnifying-glass"></i>
                      </span>
                    )}
                    <span>
                      <i className="fa-solid fa-microphone"></i>
                    </span>
                  </div>
                </form>
              </div>
              <div className="questions">
                <h3>Popular Q&A</h3>
                <p><i class="bi bi-journals"></i> How to Upload Your Developed Game</p>
                <p><i class="bi bi-journals"></i> How to Go Live Stream</p>
                <p><i class="bi bi-journals"></i> Get in touch with the Creator Support Team</p>
              </div>
              <div className="buttons">
                <button className="btn "><a href="#">Browse All Articles</a></button>
                <button className="btn "><a href="#">Ask a Question</a></button>
              </div>

            </div>
            <div className="for-image">
                <img src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1721629399/trending2_egf3rr.jpg" alt="Team Host" />
              </div>
          </div>
        </section>
      </div>

    </>
  )
}

export default Help