


class DefaultNav {
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
          logoStyle: {width:"86px", border:"3px solid yellow", borderRadius:"50%"},
          logoWrapper: {width:"100%", height:"100%", paddingTop:"20px", paddingLeft:"20px"},
          //logoWrapperTheme: Do we still need to set something for this or would this just navigato to LogoWrapper on a different template?
          profilePicWrapper: {display:"flex", flexDirection:"column", height:"100px", alignItems: "center", justifyContent: "center"},
          profilePicTheme: {fonts: {font1:"Inter"}, fontColors: {color1: "green"}, fontWeight: {bold: "800"}, fontSize: {fontSize1: "11px"}},
          navItem: {},
          linksWrapper: {backgroundColor:'teal'}, 
          //finish this
          // profileComponent: {
          //   wrapper: {}
          // },
          },
          // Styling for Side Bar
          left: {
            navContainer: {top: "0", left: "0", flexDirection: "column", width: "200px", height: "100vh", display:"flex", position: "absolute",backgroundColor:"white", borderRight:"1px solid black" },
            sectionsContainer: {display:"flex", flexDirection:"column", height:"100%", width:"193px", backgroundColor:"white"},
            sectionOne: {display:"flex", flexDirection:"column", height:"100px", alignItems: "center", justifyContent: "center"},
            sectionTwo: {display:"flex", flexDirection:"column", flex:"auto"},
            sectionThree: {display:"flex", flexDirection:"column", height:"100px", alignItems: "center", justifyContent: "center"},
            sectionFour: {display:"flex", flexDirection:"column", height:"100px", alignItems: "center", justifyContent: "center"},
            sectionFive: {display:"flex", flexDirection:"column", height:"100px", alignItems: "center", justifyContent: "center"},
            logoStyle: {width:"86px", border:"3px solid yellow", borderRadius:"50%"},
            logoWrapper: {width:"100%", height:"100%", paddingTop:"20px", paddingLeft:"20px"},
            profilePicWrapper: {display:"flex", flexDirection:"column", height:"100px", alignItems: "center", justifyContent: "center", border:"10px solid orange"},
            profilePicTheme: {fonts: {font1:"Inter"}, fontColors: {color1: "green"}, fontWeight: {bold: "800"}, fontSize: {fontSize1: "11px"}},
            navItem: {textDecoration:'none', color:"black"},
            linksWrapper: {backgroundColor:'teal'}, 
            activeNavItem:{},
            singleLinkWrapper:{marginTop:"20px"},
            activeSingleLinkWrapper:{background:"pink"},
            linkIcon:{border:"5px solid pink", width:"50px", height:"50px"},
            notify:{ color:'blue'},
            profilePicInnerWrapper: {display:"flex", width:"147px", height:"42px", background:"orange"},
            profilePicImage:{width:"42px", border:"10px solid yellow"},
            sectionOne: {border:"10px solid green" },
            sectionTwo:{border:"10px solid violet"},
            sectionThree:{border:"10px solid orange"},
            sectionFour:{},
            sectionFive:{}

            }
        }
        return style
    }

   
}
export default new DefaultNav();
