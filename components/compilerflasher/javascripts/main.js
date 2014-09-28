 $(document).ready(function(){
   
	 		compilerflasher = new compilerflasher(getFiles);
    
    
		  compilerflasher.on("pre_verify", function(){
		  $("#event_msg").append('pre_verify event fired!<br/><br/>')
		  });
		  compilerflasher.on("verification_succeed", function(binary_size){
		  $("#event_msg").append('verification_succeed event fired! Sketch size: '+binary_size+"<br/><br/>")
		  });
		  compilerflasher.on("verification_failed", function(error_output){
		  $("#event_msg").append("verification_failed event fired! \nCompilation error: <pre>"+error_output+"</pre><br/><br/>")
		  });    
});


function getFiles (){
	
	var str = "";
	
	$('#cb_cf_verify_btn').click(function(){
		
			var obj = $('.ace_line > span[class]:not(span[class="ace_indent-guide"] , span[class="ace_comment"] )');
	
			obj.each(function(){
			str += $(this).text();
			})
	})
     return {"sketch.ino": str }
}

