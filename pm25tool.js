/**
 * Created by a11 on 14-3-17.
 */
var http=require('http');
var cheerio=require('cheerio');
var host='www.chapm25.com';
//这里是你所要抓取的网页
var path='/city/beijing.html';
var options = {
    host:host,
    port:80,
    path:path,
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.13) Gecko/20080311 Firefox/2.0.0.13'
    }
};
var html = "";
http.get(options,function (res) {
    res.on('data', function (data) {
        html += data;
    });
    res.on('end', function () {
//        console.log(html)
      var $=cheerio.load(html);
       $('.container-fluid').find('.span4').each(function(i,ele){
           var title=$(this).find('.statitlediv').find('.staname').text();
		   //上边语句中find是查找的意思，你可以在网页的审查元素中一步一步找到你想要抓取数据的位置，"."代表"class","#"代表“id”在这里已经找出来所有的.span4里包含的东西了
		   
           if(title=="所有监测站列表"){
               $(this).find('tbody').find('tr').each(function(i,ele){
				   //this代表继续上一个地址
                   var name=$(this).find('td').eq(0).find('a').text();
                   var name1=$(this).find('td').eq(1).text();
                   var name2=$(this).find('td').eq(2).text();
				   //eq(0,1,2)代表第几行的数据
				   if(name=='美国大使馆' || name=="农展馆" ||name=="奥体中心"||name=="通州"||name=="天坛")
				   //筛选
				  				 {
				                     console.log(name,name1,name2)
									 //打印
				  				   }
			   })
           }
       });

    });
}).on('error', function (e) {
        console.log(e);
    });