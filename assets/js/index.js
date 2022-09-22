
$("#add_bottleneck").submit(function(event){
    alert("Data inserted seccessfully!");
})

$("#update_bottleneck").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    console.log(unindexed_array);
})