$(document).ready(function(){
    var inputText;
    function vowelList(givenText){
        var vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];
        var ctr1, ctr2 = 0;
        var result = "", removed = "", output = "";

        if(givenText == ""){
            output = "Please input any text.";
        }else{
            for(ctr1 = 0; ctr1 < vowels.length; ctr1++){
                for(ctr2 = 0; ctr2 < givenText.length; ctr2++){
                    if(vowels[ctr1] == givenText[ctr2]){
                        removed = givenText[ctr2];
                    }
                    result = givenText.replace(removed, "");
                    givenText = result;
                }
            }
            output = givenText;
        }
        $("#outputText").html(output);
    }
    
    //showing results
    $("#submitBtn").click(function(){
        inputText = document.getElementById("inputText").value;
        vowelList(inputText);
    });

    //to remove texts and display output
    $("#removeBtn").click(function(){
        inputText = document.getElementById("inputText");
        inputText.value = "";
        $("#outputText").empty();
    });
});