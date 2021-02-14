import React from 'react'
import './App.css';
import 'antd/dist/antd.css';
import { Cards } from './Components/Cards/Cards';
import { Layout,Row,Col } from 'antd';
import FooterLayout from './Components/Footer';
import HeaderLayout from './Components/Header'
import JsonData from './Services/JsonData/sample';
import CommanHeader from './Components/SharedComponent';

const { Header,Content, Footer } = Layout;


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: null,
      JsonDataDataList: JsonData.entries,
      sortType: 'desc',
      error: null,
      isLoaded: false,
    };
  }
  onSearch = (event) => {
    let keyword = event.target.value;
    this.setState({ search: keyword })
  }
  handleMenuClick = (e) => {
    let clickEvent = e.key;
    this.setState({
      sortType: clickEvent
    })
  }
  render() {
    const { JsonDataDataList, sortType,error, isLoaded, items } = this.state;
    const sorted = JsonDataDataList.sort((a, b) => {
      if (sortType === "asc") {
        return a.title.localeCompare(b.title)
      }
      else {
        return b.title.localeCompare(a.title)
      }
    })
    const JsonDataData = sorted.filter((data) => {
      if (this.state.search == null)          
        return data
      else if (data.title.toLowerCase().includes(this.state.search.toLowerCase())) {
        return data
      }
    }).map(data => {
      return (        
        <Cards title={data.title} imageUrl={data.images['Poster Art'].url} />
      )
    })
    return (
      <div className="App">
        <Layout className="layout">
          <Header>
            <HeaderLayout/>
          </Header>
          <Row className="Second-Header">
            <Col xs={24}>
                    <h1>Popular Movies</h1>
                </Col>
          </Row>
          <Content style={{ padding: '0 50px' }}>          
            <CommanHeader/>
            <div className="site-layout-content">
              <Row>
                {JsonDataData}
              </Row>
            </div>
          </Content>
          <Footer className="footerArea">
            <FooterLayout/>
          </Footer>
        </Layout>
      </div>
    )
  }
}
export default App;
