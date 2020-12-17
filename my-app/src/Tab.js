import React , {Component} from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import './Tab.css'
class Tab_sum extends Component{
    render(){
        return(
         <>
    <Tabs className="tabs">
    <TabList>
        <Tab className="tab">新着情報</Tab>
        <Tab className="tab">ニュースリリース</Tab>
        <Tab className="tab">キャンペーン</Tab>
        <Tab className="tab">お知らせ</Tab>
    </TabList>

<TabPanel>
{(() => {
        var json = require('./colum.json');
        var json_all = [] 
        for (let i = 0; i < json.length; i++) {

            if(json[i].category=="ニュースリリース"){
                var classname="category_news";
            }
            if(json[i].category=="キャンペーン"){
                var classname="category_campaign";
            }
            if(json[i].category=="お知らせ"){
                var classname="category_notice";
            }
        
            json_all.push(
            <div className="json_colum">
            <div className="json_time">{json[i].time}</div>
            <div className={classname}>{json[i].category}</div>
            <div className="json_text"><u>{json[i].text}</u></div>
            </div>);
        }
    return<div>{json_all}</div>;
       
        })()}
      </TabPanel>
      <TabPanel >  {(() => {
        var json = require('./colum.json');
        var json_news = [] 
        for (let i = 0; i < json.length; i++) {
          
            
            if(json[i].category=="ニュースリリース"){
                var classname="category_news";
                json_news.push(
                    <div className="json_colum">
                    <div className="json_time">{json[i].time}</div>
                    <div className={classname}>{json[i].category}</div>
                    <div className="json_text"><u>{json[i].text}</u></div>
                    </div>);
            }
        }
    return<div>{json_news}</div>;
       
        })()}</TabPanel>
      <TabPanel>
      {(() => {
        var json = require('./colum.json');
        var json_campaign = [] 
        for (let i = 0; i < json.length; i++) {

            if(json[i].category=="キャンペーン"){
                var classname="category_campaign";

            json_campaign.push(
            <div className="json_colum">
            <div className="json_time">{json[i].time}</div>
            <div className={classname}>{json[i].category}</div>
            <div className="json_text"><u>{json[i].text}</u></div>
            </div>);
        }}
    return<div>{json_campaign}</div>;
       
        })()}  
      </TabPanel>
      <TabPanel>
      {(() => {
        var json = require('./colum.json');
        var json_notice = [] 
        for (let i = 0; i < json.length; i++) {
            if(json[i].category=="お知らせ"){
                var classname="category_notice";
            json_notice.push(
            <div className="json_colum">
            <div className="json_time">{json[i].time}</div>
            <div className={classname}>{json[i].category}</div>
            <div className="json_text"><u>{json[i].text}</u></div>
            </div>);
        }}
    return<div>{json_notice}</div>;
       
        })()}
      </TabPanel>
</Tabs> 

</>
        )
    }
 
}
export default Tab_sum