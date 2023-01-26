


class LegatoNav {
    getNavTheme(){
        let style={
          // Styling for Top Bar
          top: {
          // Overall sections for the navbar
          navContainer: {top: "0", left: "0", flexDirection: "row", width: "100%", height: "100px", display:"flex", position: "absolute"},
          sectionsContainer: {display:"flex", flexDirection:"column", height:"100%", width:"193px", backgroundColor:"white"},
          sectionOne: {display:"flex", flexDirection:"column", height:"100px", alignItems: "center", justifyContent: "center"},
          sectionTwo: {display:"flex", flexDirection:"column", flex:"auto"},
          sectionThree: {display:"flex", flexDirection:"column", height:"100px", alignItems: "center", justifyContent: "center"},
          sectionFour: {display:"flex", flexDirection:"column", height:"100px", alignItems: "center", justifyContent: "center"},
          sectionFive: {display:"flex", flexDirection:"column", height:"100px", alignItems: "center", justifyContent: "center"},
          logoStyle: {width:"86px"},
          logoWrapper: {width:"100%", height:"100%", marginLeft:'30px'},
          //logoWrapperTheme: Do we still need to set something for this or would this just navigato to LogoWrapper on a different template?
          profilePicWrapper: {display:"flex", flexDirection:"column", height:"100px", alignItems: "center", justifyContent: "center"},
          profilePicTheme: {fonts: {font1:"Inter"}, fontColors: {color1: "green"}, fontWeight: {bold: "800"}, fontSize: {fontSize1: "11px"}},
          navItemStyle: {},
          linksWrapper: {backgroundColor:'green'}, 
          //finish this
          // profileComponent: {
          //   wrapper: {}
          // },
          },
          // Styling for Side Bar
          left: {
            navContainer: {top: "0", left: "0", flexDirection: "column", width: "300px", height: "100vh", display:"flex", position: "absolute", backgroundColor:"teal"},
            sectionsContainer: {display:"flex", flexDirection:"column", height:"100%", width:"193px", backgroundColor:"teal"},
            sectionOne: {display:"flex", flexDirection:"column", height:"100px", alignItems: "center", justifyContent: "center"},
            sectionTwo: {display:"flex", flexDirection:"column", flex:"auto"},
            sectionThree: {display:"flex", flexDirection:"column", height:"100px", alignItems: "center", justifyContent: "center"},
            sectionFour: {display:"flex", flexDirection:"column", height:"100px", alignItems: "center", justifyContent: "center"},
            sectionFive: {display:"flex", flexDirection:"column", height:"100px", alignItems: "center", justifyContent: "center"},
            logoStyle: {width:"86px", borderRadius:"50%", border:"3px solid purple"},
            logoWrapper: {width:"100%", height:"100%", marginLeft:'30px'},
            profilePicWrapper: {display:"flex", flexDirection:"column", height:"100px", alignItems: "center", justifyContent: "center"},
            profilePicTheme: {fonts: {font1:"Inter"}, fontColors: {color1: "green"}, fontWeight: {bold: "800"}, fontSize: {fontSize1: "11px"}},
            navItem: {textDecoration:'none', color:"violet"},
            linksWrapper: {backgroundColor:'green'}, 
            activeNavItem:{color:'orange'},
            singleLinkWrapper:{marginTop:"20px", marginLeft:"20px", display:'flex', flexDirection:'row', alignItems:"center"},
            activeSingleLinkWrapper:{background:"yellow"},
            linkIcon:{border:"1px solid purple", width:"50px", height:"50px"},
            notify:{ color:'orange'},
            profilePicInnerWrapper: {display:"flex", width:"147px", height:"42px"},
            profilePicImage:{width:"42px"},
            profilePicStyles:{
                innerWrapper: {flex:"1", height:"42px", display:"flex", flexDirection:"column", justifyContent: "center", marginLeft: "15px"},
                nameWrapper: {display:"flex", width:"100%"},
                name: {fontSize:"11px", fontWeight:"800", fontFamily:"Inter", color:"#636363"},
                arrowWrapper:{width:"8px", padding:"none", display: "flex", marginLeft:"8px"},
                arrow: {width:"8px"},
                logout: {color:"red"}
            
            },
            sectionOne: {border:"10px solid teal" },
            sectionTwo:{border:"10px solid violet"},
            sectionThree:{border:"10px solid blue"},
            sectionFour:{},
            sectionFive:{}
            }
        }
        return style
    }

   
}
export default new LegatoNav();
