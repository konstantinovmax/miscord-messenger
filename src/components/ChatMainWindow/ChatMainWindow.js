import React from 'react';
import { Route, Switch } from 'react-router';
import './ChatMainWindow.css';
import hashtag from '../../images/hash.png';
import userAvatarOne from '../../images/user-avatar-1.png';
import userAvatarTwo from '../../images/user-avatar-2.png';
import userAvatarThree from '../../images/user-avatar-3.png';
import userAvatarFour from '../../images/user-avatar-4.png';
import userAvatarSeven from '../../images/user-avatar-7.png';
import userAvatarEight from '../../images/user-avatar-8.png';
import userAvatarNine from '../../images/user-avatar-9.png';
import userAvatarTen from '../../images/user-avatar-10.png';
import userAvatarTwelve from '../../images/user-avatar-12.png';
import userAvatarThirteen from '../../images/user-avatar-13.png';
import userAvatarFourteen from '../../images/iconfinder_Ninja_379471.png';
import userAvatarFifteen from '../../images/iconfinder_ninja-background_479477.png';
import userAvatarSixteen from '../../images/iconfinder_smile-ninja_110625.png';

function ChatMainWindow() {
    const [isMessageData, setIsMessageData] = React.useState('')
    const [isFormValid, setIsFormValid] = React.useState(false);

    function handleChange(e) {
        setIsMessageData(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setIsMessageData('');
    }

    React.useEffect(() => {
        if (isMessageData.length < 1) {
            setIsFormValid(false);
        } else {
            setIsFormValid(true);
        }
    }, [isMessageData]);

    return (        
        <div className="chat-main-window">
            <div className="chat-main-window__title-container">
                <div className="chat-main-window__image-title-container">
                    <img className="chat-main-window__hashtag" src={hashtag} alt="Hashtag"/>
                    <h2 className="chat-main-window__title">Chat</h2>
                </div>
            </div>
            <div className="chat-main-window__chat-content">
                <Switch>
                    <Route path="/one/hello-ninjas">
                        <div className="chat-main-window__message-container">
                            <img className="chat-main-window__user-avatar" src={userAvatarFourteen} alt="???????????? ????????????????????????"/>
                            <div className="chat-main-window__text-container">
                                <div className="chat-main-window__name-data-container">
                                    <p className="chat-main-window__user-name">Blood Strike</p>
                                    <p className="chat-main-window__data">06:00</p>
                                </div>
                                <p className="chat-main-window__message">Hey!</p>
                            </div>
                        </div>
                        <div className="chat-main-window__message-container">
                            <img className="chat-main-window__user-avatar" src={userAvatarFifteen} alt="???????????? ????????????????????????"/>
                            <div className="chat-main-window__text-container">
                                <div className="chat-main-window__name-data-container">
                                    <p className="chat-main-window__user-name">Snowflash</p>
                                    <p className="chat-main-window__data">06:01</p>
                                </div>
                                <p className="chat-main-window__message">Yo!</p>
                            </div>
                        </div>
                        <div className="chat-main-window__message-container">
                            <img className="chat-main-window__user-avatar" src={userAvatarSixteen} alt="???????????? ????????????????????????"/>
                            <div className="chat-main-window__text-container">
                                <div className="chat-main-window__name-data-container">
                                    <p className="chat-main-window__user-name">Ghost Eye</p>
                                    <p className="chat-main-window__data">06:01</p>
                                </div>
                                <p className="chat-main-window__message">hey</p>
                            </div>
                        </div>
                        <div className="chat-main-window__message-container">
                            <img className="chat-main-window__user-avatar" src={userAvatarFourteen} alt="???????????? ????????????????????????"/>
                            <div className="chat-main-window__text-container">
                                <div className="chat-main-window__name-data-container">
                                    <p className="chat-main-window__user-name">Blood Strike</p>
                                    <p className="chat-main-window__data">06:12</p>
                                </div>
                                <p className="chat-main-window__message">Where is White Dragon?</p>
                            </div>
                        </div>
                    </Route>
                    <Route path="/two/hello-robots">
                        <div className="chat-main-window__message-container">
                            <img className="chat-main-window__user-avatar" src={userAvatarOne} alt="???????????? ????????????????????????"/>
                            <div className="chat-main-window__text-container">
                                <div className="chat-main-window__name-data-container">
                                    <p className="chat-main-window__user-name">Batman</p>
                                    <p className="chat-main-window__data">10:43</p>
                                </div>
                                <p className="chat-main-window__message">???????????? ????????!</p>
                            </div>
                        </div>
                        <div className="chat-main-window__message-container">
                            <img className="chat-main-window__user-avatar" src={userAvatarTwo} alt="???????????? ????????????????????????"/>
                            <div className="chat-main-window__text-container">
                                <div className="chat-main-window__name-data-container">
                                    <p className="chat-main-window__user-name">Michael</p>
                                    <p className="chat-main-window__data">10:48</p>
                                </div>
                                <p className="chat-main-window__message">????????????</p>
                            </div>
                        </div>
                        <div className="chat-main-window__message-container">
                            <img className="chat-main-window__user-avatar" src={userAvatarThree} alt="???????????? ????????????????????????"/>
                            <div className="chat-main-window__text-container">
                                <div className="chat-main-window__name-data-container">
                                    <p className="chat-main-window__user-name">Donald</p>
                                    <p className="chat-main-window__data">10:49</p>
                                </div>
                                <p className="chat-main-window__message">??????</p>
                            </div>
                        </div>
                        <div className="chat-main-window__message-container">
                            <img className="chat-main-window__user-avatar" src={userAvatarOne} alt="???????????? ????????????????????????"/>
                            <div className="chat-main-window__text-container">
                                <div className="chat-main-window__name-data-container">
                                    <p className="chat-main-window__user-name">Batman</p>
                                    <p className="chat-main-window__data">10:52</p>
                                </div>
                                <p className="chat-main-window__message">?????? ???????? ?????????</p>
                            </div>
                        </div>
                        <div className="chat-main-window__message-container">
                            <img className="chat-main-window__user-avatar" src={userAvatarOne} alt="???????????? ????????????????????????"/>
                            <div className="chat-main-window__text-container">
                                <div className="chat-main-window__name-data-container">
                                    <p className="chat-main-window__user-name">Batman</p>
                                    <p className="chat-main-window__data">10:52</p>
                                </div>
                                <p className="chat-main-window__message">?? ?????? ?????????????? ?????????? ????????????</p>
                            </div>
                        </div>
                        <div className="chat-main-window__message-container">
                            <img className="chat-main-window__user-avatar" src={userAvatarOne} alt="???????????? ????????????????????????"/>
                            <div className="chat-main-window__text-container">
                                <div className="chat-main-window__name-data-container">
                                    <p className="chat-main-window__user-name">Batman</p>
                                    <p className="chat-main-window__data">10:53</p>
                                </div>
                                <p className="chat-main-window__message">????????????!!1</p>
                            </div>
                        </div>
                        <div className="chat-main-window__message-container">
                            <img className="chat-main-window__user-avatar" src={userAvatarTwo} alt="???????????? ????????????????????????"/>
                            <div className="chat-main-window__text-container">
                                <div className="chat-main-window__name-data-container">
                                    <p className="chat-main-window__user-name">Michael</p>
                                    <p className="chat-main-window__data">11:15</p>
                                </div>
                                <p className="chat-main-window__message">Yo</p>
                            </div>
                        </div>
                        <div className="chat-main-window__message-container">
                            <img className="chat-main-window__user-avatar" src={userAvatarFour} alt="???????????? ????????????????????????"/>
                            <div className="chat-main-window__text-container">
                                <div className="chat-main-window__name-data-container">
                                    <p className="chat-main-window__user-name">John</p>
                                    <p className="chat-main-window__data">11:17</p>
                                </div>
                                <p className="chat-main-window__message">Hi</p>
                            </div>
                        </div>
                        <div className="chat-main-window__message-container">
                            <img className="chat-main-window__user-avatar" src={userAvatarTwo} alt="???????????? ????????????????????????"/>
                            <div className="chat-main-window__text-container">
                                <div className="chat-main-window__name-data-container">
                                    <p className="chat-main-window__user-name">Michael</p>
                                    <p className="chat-main-window__data">11:17</p>
                                </div>
                                <p className="chat-main-window__message">?? ????????????, ?????? ?????</p>
                            </div>
                        </div>
                        <div className="chat-main-window__message-container">
                            <img className="chat-main-window__user-avatar" src={userAvatarFour} alt="???????????? ????????????????????????"/>
                            <div className="chat-main-window__text-container">
                                <div className="chat-main-window__name-data-container">
                                    <p className="chat-main-window__user-name">John</p>
                                    <p className="chat-main-window__data">11:18</p>
                                </div>
                                <p className="chat-main-window__message">??????????, ??????????????</p>
                            </div>
                        </div>
                        <div className="chat-main-window__message-container">
                            <img className="chat-main-window__user-avatar" src={userAvatarThree} alt="???????????? ????????????????????????"/>
                            <div className="chat-main-window__text-container">
                                <div className="chat-main-window__name-data-container">
                                    <p className="chat-main-window__user-name">Donald</p>
                                    <p className="chat-main-window__data">11:19</p>
                                </div>
                                <p className="chat-main-window__message">?? ?? ????. ?????? ?????????????? ??????????!</p>
                            </div>
                        </div>
                    </Route>
                    <Route path="/two/which-robot">
                        <div className="chat-main-window__message-container">
                            <img className="chat-main-window__user-avatar" src={userAvatarOne} alt="???????????? ????????????????????????"/>
                            <div className="chat-main-window__text-container">
                                <div className="chat-main-window__name-data-container">
                                    <p className="chat-main-window__user-name">Batman</p>
                                    <p className="chat-main-window__data">09:15</p>
                                </div>
                                <p className="chat-main-window__message">???????????? ???????????? ???????????????</p>
                            </div>
                        </div>
                    </Route>
                    <Route path="/two/my-favorite-robot">
                        <div className="chat-main-window__message-container">
                            <img className="chat-main-window__user-avatar" src={userAvatarThree} alt="???????????? ????????????????????????"/>
                            <div className="chat-main-window__text-container">
                                <div className="chat-main-window__name-data-container">
                                    <p className="chat-main-window__user-name">Donald</p>
                                    <p className="chat-main-window__data">08:32</p>
                                </div>
                                <p className="chat-main-window__message">?????????? ?????????? ???????? ???????????????</p>
                            </div>
                        </div>
                        <div className="chat-main-window__message-container">
                            <img className="chat-main-window__user-avatar" src={userAvatarTwo} alt="???????????? ????????????????????????"/>
                            <div className="chat-main-window__text-container">
                                <div className="chat-main-window__name-data-container">
                                    <p className="chat-main-window__user-name">Michael</p>
                                    <p className="chat-main-window__data">08:37</p>
                                </div>
                                <p className="chat-main-window__message">?????? ???????????????? SpotMini</p>
                            </div>
                        </div>
                        <div className="chat-main-window__message-container">
                            <img className="chat-main-window__user-avatar" src={userAvatarOne} alt="???????????? ????????????????????????"/>
                            <div className="chat-main-window__text-container">
                                <div className="chat-main-window__name-data-container">
                                    <p className="chat-main-window__user-name">Batman</p>
                                    <p className="chat-main-window__data">08:37</p>
                                </div>
                                <p className="chat-main-window__message">?? ?????? ???????????????? RiSE, ???????????? ?????? ???? ?????????? ?????????????????????? ???? ????????????!</p>
                            </div>
                        </div>                        
                    </Route>
                    <Route path="/three/football">
                        <div className="chat-main-window__message-container">
                            <img className="chat-main-window__user-avatar" src={userAvatarSeven} alt="???????????? ????????????????????????"/>
                            <div className="chat-main-window__text-container">
                                <div className="chat-main-window__name-data-container">
                                    <p className="chat-main-window__user-name">Jim</p>
                                    <p className="chat-main-window__data">07:02</p>
                                </div>
                                <p className="chat-main-window__message">???????????????? ???????????? ?? ???????????? ????????????!</p>
                            </div>
                        </div>
                        <div className="chat-main-window__message-container">
                            <img className="chat-main-window__user-avatar" src={userAvatarThirteen} alt="???????????? ????????????????????????"/>
                            <div className="chat-main-window__text-container">
                                <div className="chat-main-window__name-data-container">
                                    <p className="chat-main-window__user-name">Anthony</p>
                                    <p className="chat-main-window__data">12:05</p>
                                </div>
                                <p className="chat-main-window__message">?? ????!</p>
                            </div>
                        </div> 
                    </Route>
                    <Route path="/three/kayaking">
                        <div className="chat-main-window__message-container">
                            <img className="chat-main-window__user-avatar" src={userAvatarEight} alt="???????????? ????????????????????????"/>
                            <div className="chat-main-window__text-container">
                                <div className="chat-main-window__name-data-container">
                                    <p className="chat-main-window__user-name">Walter</p>
                                    <p className="chat-main-window__data">10:10</p>
                                </div>
                                <p className="chat-main-window__message">??????????????????, ?????? ?? ?????????????? ?? 08:00 ?? ?????? ??????????????. ???????????????????? ???? ??????????????????????</p>
                            </div>
                        </div>
                        <div className="chat-main-window__message-container">
                            <img className="chat-main-window__user-avatar" src={userAvatarTwelve} alt="???????????? ????????????????????????"/>
                            <div className="chat-main-window__text-container">
                                <div className="chat-main-window__name-data-container">
                                    <p className="chat-main-window__user-name">Elizabeth</p>
                                    <p className="chat-main-window__data">10:20</p>
                                </div>
                                <p className="chat-main-window__message">????</p>
                            </div>
                        </div>
                        <div className="chat-main-window__message-container">
                            <img className="chat-main-window__user-avatar" src={userAvatarNine} alt="???????????? ????????????????????????"/>
                            <div className="chat-main-window__text-container">
                                <div className="chat-main-window__name-data-container">
                                    <p className="chat-main-window__user-name">Anna</p>
                                    <p className="chat-main-window__data">10:54</p>
                                </div>
                                <p className="chat-main-window__message">??????????, ??????????????!</p>
                            </div>
                        </div>
                        <div className="chat-main-window__message-container">
                            <img className="chat-main-window__user-avatar" src={userAvatarTen} alt="???????????? ????????????????????????"/>
                            <div className="chat-main-window__text-container">
                                <div className="chat-main-window__name-data-container">
                                    <p className="chat-main-window__user-name">Joe</p>
                                    <p className="chat-main-window__data">11:03</p>
                                </div>
                                <p className="chat-main-window__message">+</p>
                            </div>
                        </div>
                    </Route>
                </Switch>
            </div>
            <form className="chat-main-window__chat-container" onSubmit={handleSubmit}>
                <textarea
                className="chat-main-window__textarea"
                placeholder="Start messaging"
                value={isMessageData}
                onChange={handleChange}
                />
                <button
                className={`chat-main-window__button ${isFormValid ? 'chat-main-window__button' : 'chat-main-window__button_disabled'}`}
                type="submit"
                disabled={!isFormValid}
                />
            </form>
        </div>
    );
}

export default ChatMainWindow;
