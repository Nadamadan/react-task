import './componentStyle.css';

export function Header(){
    return(
        <div className='header'>
            <h1>Nada Ramadan</h1>
        </div>
    );

}

export function Post({num , title}){
    return(
        <div className='post'>
            <h2>{num}</h2>
            <h2>{title}</h2>
            <hr/>
            <p>This is the post body</p>
        </div>
    );
    
}

export function SideMenu(){
    return(
        <div className='menu'>
           <Butt text="popular ">
             <div > <img style={{width:"90px",height:"90px" , borderRadius:"10px"}} src = "https://cdn.stocksnap.io/img-thumbs/280h/rain-flower_ERM78DQMOZ.jpg" alt=''/> </div>
          </Butt>
           <Butt text="nice ">
           <div > <img style={{width:"90px",height:"90px", borderRadius:"10px"}} src = "https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?cs=srgb&dl=pexels-jonaskakaroto-736230.jpg&fm=jpg" alt=''/> </div>
             </Butt>
           <Butt text="favorite ">
           <div > <img style={{width:"90px",height:"90px" , borderRadius:"10px"}} src = "https://thumbs.dreamstime.com/b/beautiful-red-rose-flower-jpg-image-photo-background-wallpaper-design-jpeg-image-beautiful-red-rose-flower-jpg-image-photo-302892568.jpg" alt=''/> </div>
             </Butt>
           <Butt text="spreed ">
           <div > <img style={{width:"90px",height:"90px" , borderRadius:"10px"}} src = "https://wallpapers.com/images/featured/flower-pictures-unpxbv1q9kxyqr1d.jpg" alt=''/> </div>
             </Butt>
           <Butt text="familiar ">
           <div > <img style={{width:"90px",height:"90px" , borderRadius:"10px"}} src = "https://w0.peakpx.com/wallpaper/26/923/HD-wallpaper-gorgeous-red-flower.jpg" alt=''/> </div>
             </Butt>
          
        </div>
    );
    
}

 function Butt({text , children}){
    return(
           <button className='buton'>{text} Photo <div>{children}</div></button>

    );
    
}

