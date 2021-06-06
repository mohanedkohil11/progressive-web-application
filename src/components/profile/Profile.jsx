import React, { useState, Fragment } from 'react'
import userImg from "../../assets/person-fallback-image.png"

function Profile() {
    //this component to handle the content of the profile page

    //to save the original image selected by the user
    const [profileImgSelected, setProfileImgSelected] = useState()


    //to handle change the file input with type of image
    const uploadImgChangeHandler = (e) => {
        if (e.target.files[0]) {
            setProfileImgSelected(e.target.files[0])
        }
    };

    return (
        <Fragment>
            <div className="profile general-container">
                <div className="profile__start">
                    <div className="profile__start__img-cont">
                        <label htmlFor="upload-profile-img" className="profile__start__img-cont__img">
                            {profileImgSelected ? <img src={URL.createObjectURL(profileImgSelected)} /> : <img src={userImg} />}
                        </label>

                        <input
                            hidden
                            type="file"
                            accept="image/png, image/jpeg"
                            id="upload-profile-img"
                            onChange={uploadImgChangeHandler}
                        />
                    </div>
                </div>
                <div className="profile__end">
                    <div className="profile__end__inputs">
                        <div className="profile__end__inputs__field">
                            <div className="profile__end__inputs__field__title">First name</div>
                            <div className="profile__end__inputs__field__group">
                                <input type="text" className="profile__end__inputs__field__group__input" placeholder="First name" required />

                            </div>
                        </div>
                        <div className="profile__end__inputs__field">
                            <div className="profile__end__inputs__field__title">Last name</div>
                            <div className="profile__end__inputs__field__group">
                                <input type="text" className="profile__end__inputs__field__group__input" placeholder="Last name" required />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="profile__btn">
                    <button className="btn btn__save-profile-data">
                        Save
                    </button>
                </div>
            </div>
            {/* <ImgCroper profileImgSelected={profileImgSelected} setcropedImg={setcropedImg} /> */}
        </Fragment>
    )
}

export default Profile