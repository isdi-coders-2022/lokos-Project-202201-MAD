import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './Photo.scss';
import { AiOutlineHeart } from 'react-icons/ai';

export function Photo({ photo }) {
    return (
        <div className="photo">
            <div className="photo__container">
                <div className="photo__overlay">
                    <div className="photo__icon-overlay">
                        <AiOutlineHeart className="photo__heart-icon" />
                    </div>
                    <div className="photo__user-container">
                        <div className="photo__user-photo-container">
                            <img
                                src={photo.user.profile_image.small}
                                alt={photo.user.first_name}
                            />
                        </div>
                        <h2 className="photo__user-name photo__user-name--white">
                            {photo.user.username}
                        </h2>
                    </div>
                </div>
                <img
                    className="photo__img"
                    src={photo.urls.small}
                    alt={photo.alt_description}
                />
            </div>
            <div className="photo__info-container">
                <div className="photo__user-container">
                    <div className="photo__user-photo-container">
                        <img
                            src={photo.user.profile_image.small}
                            alt={photo.user.first_name}
                        />
                    </div>
                    <h2 className="photo__user-name">{photo.user.username}</h2>
                </div>
                <AiOutlineHeart className="photo__heart-icon" />
            </div>
        </div>
    );
}