import "./hom.css"
import {Fragment, useEffect, useState} from "react";
import tiwtlogo from "../assets/logot.svg"
import {Link, NavLink} from "react-router-dom";
import  man from "../assets/Ellipse 3.svg"
import star from "../assets/Group.png"
import seaarch from "../assets/Vector.svg"
function Homepage(props) {

    // let [data,setData]=useState([])
    // useEffect(()=>{
    //     let x=async ()=>{
    //         let y=await fetch('https://twitter-api45.p.rapidapi.com/timeline.php?screenname=elonmusk',
    //             {
    //                 method: 'GET',
    //                 headers: {
    //                     'X-RapidAPI-Key': 'd3b35be7ddmshff3031c464a416bp15a222jsn1328bfa4c969',
    //                     'X-RapidAPI-Host': 'twitter-api45.p.rapidapi.com'
    //                 }
    //             })
    //         let z=await y.json();
    //         setData(z.timeline);
    //
    //     }
    //     x()
    // },[])
    // console.log(data)
    return (
        <Fragment>
        <div className="container">
            <div className='left_bar'>
                <div className="left_bar_one">
                    <img src={tiwtlogo} alt="img" />
                    <ul className="left_bar_menu">
                        <div className="left_bar_menu_lists">
                            <i className='bx bxs-home-circle'></i>
                            <NavLink className="left_bar_menu_lists_list" to="/">Home</NavLink>
                        </div>
                        <div className="left_bar_menu_lists">
                            <i className='bx bx-hash'></i>
                            <NavLink className="left_bar_menu_lists_list" to="/">Explore</NavLink>
                        </div>
                        <div className="left_bar_menu_lists">
                            <i className='bx bx-bell'></i>
                            <NavLink className="left_bar_menu_lists_list" to="/">Notifications</NavLink>
                        </div>
                        <div className="left_bar_menu_lists" >
                            <i className='bx bx-envelope'></i>
                            <NavLink className="left_bar_menu_lists_list" to="/">Messages</NavLink>
                        </div>
                        <div className="left_bar_menu_lists">
                            <i className='bx bx-bookmarks' ></i>
                            <NavLink className="left_bar_menu_lists_list" to="/">Bookmarks</NavLink>
                        </div>
                        <div className="left_bar_menu_lists">
                            <i className='bx bx-list-ul'></i>
                            <NavLink className="left_bar_menu_lists_list" to="/">Lists</NavLink>
                        </div>
                        <div className="left_bar_menu_lists">
                            <i className='bx bx-user-check'></i>
                            <NavLink className="left_bar_menu_lists_list" to="/">Profile</NavLink>
                        </div>
                        <div className="left_bar_menu_lists">
                            <i className='bx bx-grid-small'></i>
                            <NavLink className="left_bar_menu_lists_list" to="/">More</NavLink>
                        </div>
                    </ul>
                    <button className="left_bar_btn">Tweet</button>
                </div>
                <div className="left_bar_account">
                    <img src={man} alt="alt"/>
                    <div className="left_bar_account_name">
                        <p>Bobur</p>
                        <p>@bobur_mavlonov</p>
                    </div>
                    <i className='bx bx-dots-horizontal-rounded'></i>
                </div>
            </div>
            <div className='center_bar'>
                <div className="center_bar_home">
                    <p>Home</p>
                    <img src={star} alt="img"/>
                </div>
                <div className="post">
                    <div className="post_box">
                        <img src={man} alt="img"/>
                        <input placeholder="What’s happening"/>
                    </div>
                    <div>
                        <ul className="links_par">
                            <Link className="logos_link" to="/"><i className='bx bx-image-alt'></i></Link>
                            <Link className="logos_link" to="/"><i className='bx bxs-file-gif'></i></Link>
                            <Link className="logos_link" to="/"><i className='bx bx-stats' ></i></Link>
                            <Link className="logos_link" to="/"><i className='bx bx-smile'></i></Link>
                            <Link className="logos_link" to="/"><i className='bx bx-calendar-minus'></i></Link>
                        </ul>
                    </div>
                    <div className="btn_box" >
                        <button className="post_btn">Tweet</button>
                    </div>

                </div>
                {/*<div className="roots">*/}
                {/*    {*/}
                {/*        data.map((objs,index)=>(*/}
                {/*            <div key={index}>*/}
                {/*                    <p>*/}
                {/*                        {objs.author}*/}
                {/*                    </p>*/}
                {/*            </div>*/}
                {/*        ))*/}
                {/*    }*/}
                {/*</div>*/}
            </div>
            <div className='right_bar'>
                <div className="search">
                    <img src={seaarch} alt="img"/>
                    <input className="right_bar_search" placeholder="Search Twitter" />
                </div>
                <div className="trends">
                        <div className="trends_for">
                            <p>Trends for you</p>
                            <Link    to="/"><i className='bx bx-cog' ></i></Link>
                        </div>
                    <div className='trends_trend'>
                        <div className="trends_trend_text">
                            <p>Trending in Germany</p>
                            <h2>Revolution</h2>
                            <h3>50.4K Tweets</h3>
                        </div>
                        <div className="point"><Link to="/"><i className='bx bx-dots-horizontal-rounded'></i></Link></div>
                    </div>
                    <div className='trends_trend'>
                        <div className="trends_trend_text">
                            <p>Trending in Germany</p>
                            <h2>Revolution</h2>
                            <h3>50.4K Tweets</h3>
                        </div>
                        <div className="point"><Link to="/"><i className='bx bx-dots-horizontal-rounded'></i></Link></div>
                    </div>
                    <div className='trends_trend'>
                        <div className="trends_trend_text">
                            <p>Trending in Germany</p>
                            <h2>Revolution</h2>
                            <h3>50.4K Tweets</h3>
                        </div>
                        <div className="point"><Link to="/"><i className='bx bx-dots-horizontal-rounded'></i></Link></div>
                    </div>
                </div>
            </div>
        </div>
        </Fragment>
    );
}

export default Homepage;