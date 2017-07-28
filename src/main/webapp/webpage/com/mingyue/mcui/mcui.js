

function browseImages(inputId, Img) {// 图片管理器，可多个上传共用
		var finder = new CKFinder();
		finder.selectActionFunction = function(fileUrl, data) {//设置文件被选中时的函数 
            decode_src(fileUrl,Img,inputId);
//            $("#" + Img).attr("src", fileUrl);
//			$("#" + inputId).attr("value", fileUrl);
//            decode(fileUrl, Img);
		};
		finder.resourceType = 'Images';// 指定ckfinder只为图片进行管理
		finder.selectActionData = inputId; //接收地址的input ID
		finder.removePlugins = 'help';// 移除帮助(只有英文)
		finder.defaultLanguage = 'zh-cn';
		finder.popup();
	}
function browseFiles(inputId, file) {// 文件管理器，可多个上传共用
	var finder = new CKFinder();
	finder.selectActionFunction = function(fileUrl, data) {//设置文件被选中时的函数 

        $("#" + file).attr("href", fileUrl);
		$("#" + inputId).attr("value", fileUrl);
		decode(fileUrl, file);
	};
	finder.resourceType = 'Files';// 指定ckfinder只为文件进行管理
	finder.selectActionData = inputId; //接收地址的input ID
	finder.removePlugins = 'help';// 移除帮助(只有英文)
	finder.defaultLanguage = 'zh-cn';
	finder.popup();
}
function decode(value, id) {//value传入值,id接受值
	var last = value.lastIndexOf("/");
	var filename = value.substring(last + 1, value.length);
    alert(decodeURIComponent(filename));
	$("#" + id).text(decodeURIComponent(filename));
}
function decode_src(value, Img,inputId) {//value传入值,id接受值
//    alert(value);
    var last = value.lastIndexOf("/");
    var filename = value.substring(last + 1, value.length);
//    alert(filename);
    var first=value.substring(0, last+1);
//    alert(first);
    var dc=first+decodeURIComponent(filename)
    $("#" + Img).attr("src", dc);
    $("#" + inputId).attr("value", dc);
//    $("#" + id).text(decodeURIComponent(filename));
}


function faka()
{
	var name = $("#name").val();//姓名
	var sxh = $("#sxh").val();//学号
	var rfid = $("#rfid").val();//rfid号
	
	var activeX = document.getElementById("bieber_card");
    if(activeX.open_card())
    {
    	$("#phyid").val(activeX.GetIcNo());
    	
    	activeX.SetStudentName(name);
    	activeX.SetRfid(rfid);
    	activeX.SetStudentNo(sxh);
    	activeX.WriteCard();//写卡
    }
    
//	alert(activeX.GetStudentName());
//	alert(activeX.GetStudentNo());
//	alert(activeX.GetRfid());
//	alert(activeX.GetIcNo());
//	alert(activeX.GetLimitYear()+"/"+activeX.GetLimitMoon()+"/"+activeX.GetLimitDay());
//	alert(activeX.GetStatus());
//	alert(activeX.GetCount());
	//var name="帝豪";
    
    
	
	//activeX.SetRfid("334455");
	//activeX.SetStudentName("临时卡");
	//activeX.WriteCard();
	//activeX.InitCard();
	
}

//读卡
function readka()
{
	//alert("读卡");
	var activeX = document.getElementById("bieber_card");
	
	if(activeX.open_card())
	{
		$("#name").val(activeX.GetStudentName());//姓名
		$("#sxh").val(activeX.GetStudentNo());//学号
		$("#rfid").val(activeX.GetRfid());//rfid号
		$("#phyid").val(activeX.GetIcNo());
	}
}

function readIcNo()
{
	var activeX = document.getElementById("bieber_card");
	
	if(activeX.open_card())
	{
		$("#rfid").val(activeX.GetRfid());
		$("#phyid").val(activeX.GetIcNo());
	}
}

//把卡信息读出来，打开该学生的编辑窗口
function readStudentMsg()
{
	//测试用
//	var sxh = "G441721199805280024";//学号
//	createwindow('编辑', 'tbStudentController.do?goUpdate&sxh=' + sxh, 700, 600);
	
	var activeX = document.getElementById("bieber_card");
	
	if(activeX.open_card())
	{
		var rfid = activeX.GetRfid();//学生学号
		createwindow('编辑', 'tbStudentController.do?goUpdate&rfid=' + rfid, 700, 600);
	}
	
}

//$(function() {
//	$('#stuDepSelect').combotree({
//		valueField:"id",
//		textField:"departname",
//		editable:false,
//		url : 'departController.do?setPFunction&selfId=${depart.id}',
//		onLoadSuccess : function(param)
//		{
//			//var depid = $("#StuDepartid").val();
//			//$('#stuDepSelect').combotree("setValue",depid);
//		},
//		onSelect : function(param)
//		{
//			$("#StuDepartid").val(param.id);
//		}
//
//	});
//});