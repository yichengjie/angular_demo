function addToTable(){//����һ�е������
	var id = $("#id").val();
	var name = $("#name").val();
	var desc = $("#desc").val();
	if(id==""){
		alert("������ID");
		return;
	}
	if(name==""){
		alert("����name");
		return;
	}
	if(desc==""){
		alert("������desc");
		return;
	}
	var sValue=id+','+name+','+desc;
	if(checkIfTRInTable(sValue)){
		alert("�����Ѿ����");
		return;
	}
	var al = document.getElementById("newTable");//��ȡҪ��ӵı��
	var newLine = al.insertRow();//����һ��
	newLine.className = 'listrow';//Ϊ��������ָ����ʽ
	var cb = '<input type=Checkbox name=infoid checked value="' + sValue + '" >';
	addNewCell(newLine,cb);
	addNewCell(newLine,id);
	addNewCell(newLine,name);
	addNewCell(newLine,desc);
}
function addNewCell(trLine,tdText){//��������ӵ�Ԫ������
	 var newCell = trLine.insertCell();
	 newCell.innerHTML = tdText;
}
function checkIfTRInTable(cname){//��֤�Ƿ��Ѿ���ӹ�
	for(i = 0;i < document.formadd.elements.length;i++){
			if(document.formadd.elements[i].value == cname){
				return true;
			}	
		}
	return false;
}
function deleteFromTable() {
	var delnum=0;//������¼ѡ�������Ŀ
	for (var i=0;i<document.getElementsByName("infoid").length;i++)
     {
     	e = document.getElementsByName("infoid")[i];
     	if (e.checked == true)delnum++;
     }
	if( delnum != 0 )
	{
		if (confirm("ȷ��Ҫɾ����?"))
		{
			var oTable = document.getElementById("newTable");	
			var cn= oTable.rows.length;
			var num=1;

			for (var i=1;i<cn;i++)
			 {
				e = document.getElementsByName("infoid")[num-1];			
				if(e.checked==true)
				 {
					oRow = oTable.rows(num);
					oRow.removeNode(true);
					num--;
				 }
				 num++;
			 }
		}
		else {}
	}
	else alert("��ѡ��Ҫɾ������!");
}
function checkAll(checked){
	$("input[name='infoid']").attr("checked", checked);
}