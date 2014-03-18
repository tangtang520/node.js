/**
 * Created by a11 on 14-3-17.
 */
var http=require('http');
var cheerio=require('cheerio');
var host='www.chapm25.com';
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
           if(title=="所有监测站列表"){
               $(this).find('tbody').find('tr').each(function(i,ele){
                   var name=$(this).find('td').eq(0).find('a').text();
                   var name1=$(this).find('td').eq(1).text();
                   var name2=$(this).find('td').eq(2).text();
				   
				   if(name=='美国大使馆' || name=="农展馆" ||name=="奥体中心"||name=="通州"||name=="天坛")
				  				 {
				                     console.log(name,name1,name2)
				   	
				  				   }
				   	
				   
				   
				   
				   
				   
				  
					
				   
               
			   
			   
			   })
           }
       });

    });
}).on('error', function (e) {
        console.log(e);
    });