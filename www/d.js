var options = {

};

// startServer( options, updateStatus, stopServer );
 
// stopServer( success_callback, error_callback );
 
// getURL( success_callback, error_callback );
 
// getLocalPath( success_callback, error_callback );

    var httpd = null;
    function initHTTPD() {
        httpd = ( cordova && cordova.plugins && cordova.plugins.CorHttpd ) ? cordova.plugins.CorHttpd : null;

        startServer( "wwwroot" );


    }
    function updateStatus() {
    	document.getElementById('location').innerHTML = "document.location.href: " + document.location.href;
    	if( httpd ) {
    	  /* use this function to get status of httpd
    	  * if server is up, it will return http://<server's ip>:port/
    	  * if server is down, it will return empty string ""
    	  */
    		httpd.getURL(function(url){
    			if(url.length > 0) {
    				document.getElementById('url').innerHTML = "server is up: <a href='" + url + "' target='_blank'>" + url + "</a>";
    			} else {
    				document.getElementById('url').innerHTML = "server is down.";
    			}
    		});
    		// call this function to retrieve the local path of the www root dir 
    		httpd.getLocalPath(function(path){
    			document.getElementById('localpath').innerHTML = "<br/>localPath: " + path;
        	});
    	} else {
    		alert('CorHttpd plugin not available/ready.');
    	}
    }
    function startServer( wwwroot ) {
    	if ( httpd ) {
    	    // before start, check whether its up or not 
    	    httpd.getURL(function(url){
    	    	if(url.length > 0) {
    	    		document.getElementById('url').innerHTML = "server is up: <a href='" + url + "' target='_blank'>" + url + "</a>";
	    	    } else {
	    	        /* wwwroot is the root dir of web server, it can be absolute or relative path
	    	        * if a relative path is given, it will be relative to cordova assets/www/ in APK.
	    	        * "", by default, it will point to cordova assets/www/, it's good to use 'htdocs' for 'www/htdocs'
	    	        * if a absolute path is given, it will access file system.
	    	        * "/", set the root dir as the www root, it maybe a security issue, but very powerful to browse all dir
	    	        */
    	    	    httpd.startServer({
    	    	    	'www_root' : wwwroot,
    	    	    	'port' : 8080,
    	    	    	'localhost_only' : false
    	    	    }, function( url ){
    	    	      // if server is up, it will return the url of http://<server ip>:port/ 
    	    	      // the ip is the active network connection 
    	    	      // if no wifi or no cell, "127.0.0.1" will be returned. 
        	    		document.getElementById('url').innerHTML = "server is started: <a href='" + url + "' target='_blank'>" + url + "</a>";
    	    	    }, function( error ){
    	    	    	document.getElementById('url').innerHTML = 'failed to start server: ' + error;
    	    	    });
    	    	}
    	    	
    	    });
    	} else {
    		alert('CorHttpd plugin not available/ready.');
    	}
    }
    function stopServer() {
    	if ( httpd ) {
    	    // call this API to stop web server 
    	    httpd.stopServer(function(){
    	    	document.getElementById('url').innerHTML = 'server is stopped.';
    	    },function( error ){
    	    	document.getElementById('url').innerHTML = 'failed to stop server' + error;
    	    });
    	} else {
    		alert('CorHttpd plugin not available/ready.');
    	}
    }