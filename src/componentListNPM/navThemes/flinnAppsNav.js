


class FlinnAppsNav {
    getNavTheme(){
        let style={
          // Styling for Top Bar
          top: {
          // Overall sections for the navbar
          navContainer: {top: "0", left: "0", flexDirection: "row", width: "100%", height: "100px", display:"flex", position: "absolute", backgroundColor:'teal'},
          sectionsContainer: {display:"flex", flexDirection:"column", height:"100%", width:"193px", backgroundColor:"white"},
          sectionOne: {display:"flex", flexDirection:"column", height:"100px", alignItems: "center", justifyContent: "center"},
          sectionTwo: {display:"flex", flexDirection:"column", flex:"auto"},
          sectionThree: {display:"flex", flexDirection:"column", height:"100px", alignItems: "center", justifyContent: "center"},
          sectionFour: {display:"flex", flexDirection:"column", height:"100px", alignItems: "center", justifyContent: "center"},
          sectionFive: {display:"flex", flexDirection:"column", height:"100px", alignItems: "center", justifyContent: "center"},
          logoStyle: {width:"86px"},
          logoWrapper: {width:"100%", height:"100%"},
          //logoWrapperTheme: Do we still need to set something for this or would this just navigato to LogoWrapper on a different template?
          profilePicWrapper: {display:"flex", flexDirection:"column", height:"100px", alignItems: "center", justifyContent: "center"},
          profilePicTheme: {fonts: {font1:"Inter"}, fontColors: {color1: "green"}, fontWeight: {bold: "800"}, fontSize: {fontSize1: "11px"}},
          navItemStyle: {},
          linksWrapper: {backgroundColor:'blue'}, 
          //finish this
          // profileComponent: {
          //   wrapper: {}
          // },
          },
          // Styling for Side Bar
          left: {
            navContainer: {top: "0", left: "0", flexDirection: "column", width: "393px", height: "100vh", display:"flex", position: "absolute", background:'blue'},
            sectionsContainer: {display:"flex", flexDirection:"column", height:"100%", width:"193px", backgroundColor:"blue"},
            sectionOne: {display:"flex", flexDirection:"column", height:"100px", alignItems: "center", justifyContent: "center"},
            sectionTwo: {display:"flex", flexDirection:"column", flex:"auto"},
            sectionThree: {display:"flex", flexDirection:"column", height:"100px", alignItems: "center", justifyContent: "center"},
            sectionFour: {display:"flex", flexDirection:"column", height:"100px", alignItems: "center", justifyContent: "center"},
            sectionFive: {display:"flex", flexDirection:"column", height:"100px", alignItems: "center", justifyContent: "center"},
            logoStyle: {width:"86px"},
            logoWrapper: {width:"100%", height:"100%"},
            profilePicWrapper: {display:"flex", flexDirection:"column", height:"100px", alignItems: "center", justifyContent: "center", border:"10px solid blue"},
            profilePicTheme: {fonts: {font1:"Inter"}, fontColors: {color1: "green"}, fontWeight: {bold: "800"}, fontSize: {fontSize1: "11px"}},
            navItem: {textDecoration:'none', color:"blue"},
            linksWrapper: {backgroundColor:'blue'}, 
            activeNavItem:{color:'teal'},
            singleLinkWrapper:{marginTop:"20px", marginLeft:"20px", border:"1px solid black"},
            activeSingleLinkWrapper:{background:"red"},
            linkIcon:{border:"5px solid green", width:"50px", height:"50px"},
            notify:{ color:'violet'},
            profilePicInnerWrapper: {display:"flex", width:"147px", height:"42px", background:"blue"},
            profilePicImage:{width:"42px", border:"10px solid blue"},
            sectionOne: {border:"10px solid violet" },
            sectionTwo:{border:"10px solid blue"},
            sectionThree:{border:"10px solid green"},
            sectionFour:{},
            sectionFive:{}
            
            }
        }
        return style
    }

   
}
export default new FlinnAppsNav();
