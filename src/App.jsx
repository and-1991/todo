import React from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';
import Todos from './components/view/todos';

const { Header, Content } = Layout;

const Wrapper = styled.div`
  font-family: Roboto sans-serif;
  width: 100%;
  height: 100vh;
  background-color: #fff;
  box-sizing: border-box;
`

const StyleLayout = styled(Layout)`
        height: 100%;
`


const PageName = styled.div`
  font-size: 2.5em;
  font-weight: bold;
  text-align: center;
  color: #FFF;
`

const App = () => (
        <Wrapper>
            <StyleLayout>
                <Layout>
                    <Header>
                        <PageName>
                            Todo App
                        </PageName>
                    </Header>
                    <Content>
                        <Todos/>
                    </Content>
                </Layout>
            </StyleLayout>
        </Wrapper>
)

export default App;
