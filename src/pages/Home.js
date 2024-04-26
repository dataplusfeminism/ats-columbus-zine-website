import React, { Component } from 'react';
import { connect } from 'react-redux';
import { windowResize } from '../actions';
import styled from 'styled-components';
import title_logo from "../assets/title_logo.svg";
import df_logo from "../assets/df_logo.svg";
import df_white_logo from "../assets/df_white_logo.svg";
import collage from "../assets/collage.png";
import zine_photo from "../assets/zine_photo.png";
import media from "../stylesheets/media";
import { Gutter } from '../stylesheets/components';

const UpperArea = styled.div`
  background-color: white;
`
const BottomArea = styled.div`
  background-color: #782B65;
`
const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 25px 0;
  position:relative;


  ${media.padLandscape`
    max-width: 950px;
    width: 100%;
  `}
  ${media.mobileLarge`
    max-width: 700px;
    width: 100%;
  `}
`
const SpaceBetweenContainer = styled.div`
  display: flex;
  justify-content: space-between;


  ${media.mobileSmall`
    display:block;
  `}
`

const DFLogoImg = styled.img`

${media.mobileSmall`
    width: 80px;
  `}
`

const ColumnContainer = styled.div`
  display: flex;
  justify-content: space-between;


  ${media.mobileLarge`
    display:block;
  `}
`
const BigDesc = styled.div`
  font-size: 2.2em;
  line-height: 1.1;

  &.white {
    color: white;
  }

  ${media.mobileSmall`
    font-size: 1.7em;
  `}
`
const Desc = styled.div`
  font-family: "Source Sans Pro", sans-serif;
  font-size: 1.0em;
  line-height: 1.4;
  &.white {
    color: white;
  }

`
const Column = styled.div`
  width: calc(50% - 30px);
  max-width: 540px;
  
  ${media.mobileLarge`
    max-width: auto;
    width: 100%;
    margin-bottom: 50px;
  `}

  ${media.mobileSmall`
    width: calc(100% - 40px);
    margin: 0 20px;
    margin-bottom: 50px;
  `}
`

const TitleLogo = styled.div`
  ${media.mobileSmall`
    margin: 0 20px;
  `}
`
const DFLogo = styled.div`
  margin: 10px 20px;
`

const RequestBtn = styled.a`
  display: inline-block;
  color: #782B65;
  border: 1px solid #782B65;
  padding: 13px 25px;
  border-radius: 40px;
  font-weight: 700;
  font-size: 1.2em;
  text-transform: uppercase;


  &.white {
    color: #782B65;
    border: 1px solid white;
    background: white;
  }
`
const CollageArea = styled.div`
  position: absolute;
  bottom: 0;
  left: 24%;

  ${media.mobileSmall`
    
    left: 20px;
    img {

      width: calc(100% - 20px);
    }
  `}
`

const TitleLogoImg = styled.img`
  ${media.mobileSmall`
    width: 80%;
  `}
`
const HeaderPhysicalCopyArea = styled.div`
  ${media.mobileSmall`
    margin: 0 20px;
  `}
`

const ResourceTitle = styled.div`
  color: white;
`
const SmallDesc = styled.div`
  font-family: "Source Sans Pro", sans-serif;
  font-size: 1.0em;
  line-height: 1.4;
    color: white;
`

const ZinephotoImg = styled.img`
  ${media.mobileLarge`
    width: 100%;
  `}
`

const ResourceUl = styled.ul`
  list-style-type: circle;
  margin-left:18px;

  li a {
    font-weight: 600;
    color:white;
    text-decoration: underline;
  }
`;
const Fragment = React.Fragment;

class Home extends Component {
 
  componentWillMount(){
    window.addEventListener('resize', this.resizeHandler.bind(this));
    this.resizeHandler();
  }

  componentDidMount(){
  
  }


  resizeHandler(e){
    this.props.dispatch(windowResize({
      width: window.innerWidth,
      height: window.innerHeight
    }));
    
  }

  render() {


    return (
      <Fragment>
        <UpperArea>
          <Gutter h={25} />
          <Container>
            <SpaceBetweenContainer>
              <TitleLogo>
                <TitleLogoImg src={title_logo} alt="We never wanted him here" />
              </TitleLogo>
              <DFLogo>
                <a href="https://dataplusfeminism.mit.edu" target="_blank" rel="noopener noreferrer"><DFLogoImg src={df_logo} alt="Data + Feminism Lab, MIT" /></a>
              </DFLogo>
            </SpaceBetweenContainer>
            <Gutter h={20} />

            <HeaderPhysicalCopyArea>
              <BigDesc>
                <b>
                  A brief history of <br/>
                  protests, takedowns,  <br/>
                  and counter-proposals <br/>
                  to the commemoration of  <br/>
                  Christoper Columbus 
                </b>
              </BigDesc>  

              <Gutter h={20} />
              <RequestBtn href="https://ats-columbus-zine.s3.amazonaws.com/columbus_zine_spreads.pdf">
                Download the Digital Zine
              </RequestBtn>
            </HeaderPhysicalCopyArea>
            <Gutter h={250} />
            <CollageArea>
              <img src={collage} alt="Columbus Zine Collage" />
            </CollageArea>
          </Container>
        </UpperArea>
        <BottomArea>
          <Container>
            <Gutter h={50} />
            <ColumnContainer>
              <Column>
                <BigDesc className="white">
                  <b>
                    “We Never Wanted Him Here” is a map zine that gives a brief history of protests, takedowns, and counter-proposals to the commemoration of Christopher Columbus in the United States.
                  </b>
                </BigDesc>
                <Gutter h={20} />
                <Desc className="white">
                  Christopher Columbus infamously dominates our US history and cultural identity. The figure of Columbus is glamorized as a hero, cultural icon, and the great discoverer of America across textbooks, memorials, place names and more. In contestation to his mythical valor, nation-wide protests for racial, indigenous, and LGBTQ+ justice have accelerated dialogue about who gets celebrated, and whose histories become immortalized in American’s built-environment. While there’s plenty of info about the “greatness” of Columbus, this Zine seeks to highlight the opposite: <br/><b>WE NEVER WANTED HIM HERE!</b>
                </Desc>
                <Gutter h={80} />
                <img src={zine_photo} style={{width: "100%"}} alt="Columbus Zine" />
                <Gutter h={5} />
                <Desc className="white">
                  We are happy to send out physical copies of the zine as available. We ask that you make a donation in exchange to an organization that works on dismantling the Columbian legacy, and what it stands for.<br/><br/>
                  <b>To get a copy of the zine, email a picture or copy of your donation receipt and your mailing address to <a href="mailto:dataplusfeminism@mit.edu" className="white_small">dataplusfeminism@mit.edu</a></b>. We list here a few organizations whose work has touched on decolonizing the built landscape, advocating for indigenous people’s day or generating awareness of Columbus’ problematic legacy. Feel free to suggest other organizations to us or donate to a local activists group in your area. 
                </Desc>
                <Gutter h={15} />
                <SmallDesc>

                  <ResourceUl>
                    <li>
                      <a href="https://decolonizethisplace.org/donate" rel="noopener noreferrer" target="_blank">
                        Decolonize This Place
                      </a>
                    </li>
                    <li>
                      <a href="https://illuminatives.org/donate/" rel="noopener noreferrer" target="_blank">
                        Illuminatives
                      </a>
                    </li>

                    <li>
                      <a href="https://secure.actblue.com/donate/ms_blm_homepage_2019" rel="noopener noreferrer" target="_blank">
                        BLM 
                      </a>
                    </li>

                    <li>
                      <a href="https://monumentlab.wedid.it/" rel="noopener noreferrer" target="_blank">
                        Monument Lab
                      </a>
                    </li> 
                    <li>
                      <a href="https://italiansforipd.org/take-action/" rel="noopener noreferrer" target="_blank">
                        Italian Americans for Indigenous Peoples Day 
                      </a> (no donations, but you can sign their statement)
                    </li> 
                    <li>
                      <a href="http://www.uaine.org/donate.html" rel="noopener noreferrer" target="_blank">
                        United American Indians of New England
                      </a>
                    </li> 

                    <li>
                      <a href=" https://donate.splcenter.org/" rel="noopener noreferrer" target="_blank">
                        Southern Poverty Law Center
                      </a>
                    </li> 
                  </ResourceUl>
                  <Gutter h={15} />

                  If you are interested in bulk copies for the zine for your bookshop or library or classroom or organization or event, please send us an email at dataplusfeminism@mit.edu — we have a bunch of copies ready to send. Zines will also be available at future D+F Lab events.
                </SmallDesc>
                  <Gutter h={15} />

                <RequestBtn className="white" href="mailto:dataplusfeminism@mit.edu">
                  Request Physical Copies
                </RequestBtn>
              </Column>

              <Column>

                <RequestBtn className="white" href="https://ats-columbus-zine.s3.amazonaws.com/columbus_zine_spreads.pdf">
                  Download the Digital Zine
                </RequestBtn>
                <Gutter h={10} />
                <SmallDesc>
                  This work is licensed under a <a className="white_small" rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License</a>.
                </SmallDesc>
                <Gutter h={20} />
                <BigDesc className="white">
                  <b>Resources</b>
                </BigDesc>
                <Gutter h={10} />
                <SmallDesc>
                  <ResourceUl>
                    <li>Our <a href="https://medium.com/data-feminism-lab-mit/we-never-wanted-him-here-d6f1af2a5b5" rel="noopener noreferrer" target="_blank">Medium Post</a> </li> 
                    <li>More about Ida B. Wells’s <a href="https://www.lib.uchicago.edu/collex/exhibits/voice-for-justice-life-and-legacy-ida-b-wells/worlds-columbian-exposition/" rel="noopener noreferrer" target="_blank">“The Reason Why”</a> </li> 
                    <li><a href="http://ldhi.library.cofc.edu/exhibits/show/african_laborers_for_a_new_emp/the_spanish_and_new_world_slav" rel="noopener noreferrer" target="_blank">Digital exhibition</a> about Columbus’s role in the transatlantic slave trade and Indigenous genocide and dispossession </li> 
                    <li>Schlereth, Thomas J. <a href=" https://www.jstor.org/stable/2080794" rel="noopener noreferrer" target="_blank">“Columbia, Columbus, and Columbianism.”</a> <i>The Journal of American History 79, no. 3 (1992): 937-968.</i></li> 
                    <li><a href="https://italiansforipd.org/" rel="noopener noreferrer" target="_blank">Italian Americans for Indigenous People's Day.</a></li> 
                    <li><a href="http://uaine.org/"  rel="noopener noreferrer" target="_blank">The United American Indians of New England.</a></li> 
                    <li><a href="http://confrontingcolumb.us/" target="_blank" rel="noopener noreferrer">Confronting Columbus project.</a></li>
                  </ResourceUl>
                </SmallDesc>
                <Gutter h={30} />
                <SmallDesc>
                  <b>WE NEVER WANTED HIM HERE</b> is a zine created by Elizabeth Borneman, Hua Xi, and Lily Xie as part of Audit the Streets, a project whose team includes Catherine D'Ignazio, <a href="https://wonyoung.so" target="_blank" className="wy">Wonyoung So</a>, and Nico Addae. 
                </SmallDesc>
                <Gutter h={15} />
                <SmallDesc>
                  All of us are researchers at the Data + Feminism Lab, based in the Department of Urban Studies and Planning at MIT.
                </SmallDesc>
                
                <Gutter h={10} />

                <a href="https://dataplusfeminism.mit.edu" target="_blank" rel="noopener noreferrer"><img src={df_white_logo} alt="Data + Feminism Lab, MIT" /></a>
              </Column>
            </ColumnContainer>
          </Container>
          <Gutter h={25} />

        </BottomArea>
      </Fragment>
    );
  }
}

let mapStateToProps = state => {
  return {
    windowHeight: state.windowHeight
  }
}

export default connect(mapStateToProps)(Home);