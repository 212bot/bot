var first = true;stop = false;a = 0;trade = 0;totalstake = 0;
function start(){
	first = true;
	stop = false;
	trade = 0;
	totalstake = 0;a = 0;
	traded();
}

function traded(){
	var url = 'wss://ws.binaryws.com/websockets/v3?app_id=11198';
	    ws = new WebSocket(url)
	 ws.onopen = function(){
	 	ws.send(JSON.stringify({authorize: document.getElementById('token_virt').value}))
	 }
	 ws.onclose = function(){
	 	if(!stop) traded();
	 }
	 ws.onmessage = function(msg){
	 	var data = JSON.parse(msg.data)
    	if(data.authorize){
    		$('#dis_account').html('<i class="fa fa-user"></i> Account : '+data.authorize.loginid)
    		$('#dis_email').html('<i class="fa fa-vk"></i> Email : '+data.authorize.email)
             if(first){
             	
             	saldopertama = Number(data.authorize.balance);
             }
             ws.send(JSON.stringify({ticks: 'R_10'}))
    	}
    	if(data.balance){
    		saldo = Number(data.balance.balance);
            profit = saldo - saldopertama;
            $('#dis_total_a').html('<i class="fa fa-dollar"></i>Total Profit : '+profit.toFixed(2))
            if(profit < -Number($('#sl').val())){
            	stop = true;alert('STOP LOSS TERCAPAI !!');ws.close();
            }
    	}
	 	if(data.tick){
	 		if(first){
	 			first = false;
	 			$('#dis_start_time').html('<i class="fa fa-sign-in"></i>Start Time : '+new Date(data.tick.epoch * 1e3).toString().slice(16,24))
	 		}
	 		$('#dis_time').html('<i class="fa fa-sign-out"></i>Now Time : '+new Date(data.tick.epoch * 1e3).toString().slice(16,24))
	 		if(stop) ws.close();
	 		a++;
	 		if(a >= Number($('#jeda_hd').val())){
	 			a = 0;
			 	if($('#vrt1').is(':checked')){
			 		totalstake += Number($('#stake_a').val());
			 		trade++;
			 		 ws.send(JSON.stringify({
		                parameters: {
		                amount: document.getElementById('stake_a').value,
		                basis: 'stake',
		                contract_type: document.getElementById('type_trade_a').value,
		                currency: 'USD',
		                barrier: document.getElementById('barrier_a').value,
		                duration: document.getElementById('duration_a').value,
		                duration_unit: document.getElementById('type_duration_a').value,
		                symbol: document.getElementById('market_a').value
		              },
		              buy: '1',
		              price: document.getElementById('stake_a').value
		          }));
			 		 ws.send(JSON.stringify({
		                parameters: {
		                amount: document.getElementById('stake_a').value,
		                basis: 'stake',
		                contract_type: document.getElementById('type_trade_a').value,
		                currency: 'USD',
		                barrier: document.getElementById('barrier_a').value,
		                duration: document.getElementById('duration_a').value,
		                duration_unit: document.getElementById('type_duration_a').value,
		                symbol: document.getElementById('market_a').value
		              },
		              buy_contract_for_multiple_accounts: '1',
		              price: document.getElementById('stake_a').value,
		              tokens: document.getElementById('token_a').value.split('|')
		          }));
	 			}
			 	if($('#vrt2').is(':checked')){
			 		totalstake += Number($('#stake_b').val());
			 		trade++;
			 		 ws.send(JSON.stringify({
		                parameters: {
		                amount: document.getElementById('stake_b').value,
		                basis: 'stake',
		                contract_type: document.getElementById('type_trade_b').value,
		                currency: 'USD',
		                barrier: document.getElementById('barrier_b').value,
		                duration: document.getElementById('duration_b').value,
		                duration_unit: document.getElementById('type_duration_b').value,
		                symbol: document.getElementById('market_b').value
		              },
		              buy: '1',
		              price: document.getElementById('stake_b').value
		          }));
			 		 ws.send(JSON.stringify({
		                parameters: {
		                amount: document.getElementById('stake_b').value,
		                basis: 'stake',
		                contract_type: document.getElementById('type_trade_b').value,
		                currency: 'USD',
		                barrier: document.getElementById('barrier_b').value,
		                duration: document.getElementById('duration_b').value,
		                duration_unit: document.getElementById('type_duration_b').value,
		                symbol: document.getElementById('market_b').value
		              },
		              buy_contract_for_multiple_accounts: '1',
		              price: document.getElementById('stake_b').value,
		              tokens: document.getElementById('token_b').value.split('|')
		          }));
	 			}
			 	if($('#vrt3').is(':checked')){
			 		totalstake += Number($('#stake_c').val());
			 		trade++;
			 		 ws.send(JSON.stringify({
		                parameters: {
		                amount: document.getElementById('stake_c').value,
		                basis: 'stake',
		                contract_type: document.getElementById('type_trade_c').value,
		                currency: 'USD',
		                barrier: document.getElementById('barrier_c').value,
		                duration: document.getElementById('duration_c').value,
		                duration_unit: document.getElementById('type_duration_c').value,
		                symbol: document.getElementById('market_c').value
		              },
		              buy: '1',
		              price: document.getElementById('stake_c').value
		          }));
			 		 ws.send(JSON.stringify({
		                parameters: {
		                amount: document.getElementById('stake_c').value,
		                basis: 'stake',
		                contract_type: document.getElementById('type_trade_c').value,
		                currency: 'USD',
		                barrier: document.getElementById('barrier_c').value,
		                duration: document.getElementById('duration_c').value,
		                duration_unit: document.getElementById('type_duration_c').value,
		                symbol: document.getElementById('market_c').value
		              },
		              buy_contract_for_multiple_accounts: '1',
		              price: document.getElementById('stake_c').value,
		              tokens: document.getElementById('token_c').value.split('|')
		          }));
	 			}
			 	if($('#vrt4').is(':checked')){
			 		totalstake += Number($('#stake_d').val());
			 		trade++;
			 		 ws.send(JSON.stringify({
		                parameters: {
		                amount: document.getElementById('stake_d').value,
		                basis: 'stake',
		                contract_type: document.getElementById('type_trade_d').value,
		                currency: 'USD',
		                barrier: document.getElementById('barrier_d').value,
		                duration: document.getElementById('duration_d').value,
		                duration_unit: document.getElementById('type_duration_d').value,
		                symbol: document.getElementById('market_d').value
		              },
		              buy: '1',
		              price: document.getElementById('stake_d').value
		          }));
			 		 ws.send(JSON.stringify({
		                parameters: {
		                amount: document.getElementById('stake_d').value,
		                basis: 'stake',
		                contract_type: document.getElementById('type_trade_d').value,
		                currency: 'USD',
		                barrier: document.getElementById('barrier_d').value,
		                duration: document.getElementById('duration_d').value,
		                duration_unit: document.getElementById('type_duration_d').value,
		                symbol: document.getElementById('market_d').value
		              },
		              buy_contract_for_multiple_accounts: '1',
		              price: document.getElementById('stake_d').value,
		              tokens: document.getElementById('token_d').value.split('|')
		          }));
	 			}
	 			$('#dis_total_stake').html('<i class="fa fa-money"></i>Total Stake : '+totalstake.toFixed(2))
	 			$('#dis_total_turnover').html('<i class="fa fa-bitcoin"></i>Turn Over : '+(totalstake * 0.0075).toFixed(2))
	 			$('#dis_trade_a').html('<i class="fa fa-trophy"></i> Trade : '+trade+' / Win : 0 / Loss : 0')
	 			ws.send(JSON.stringify({balance: 1}));
	 		}}else{
	 			console.log(msg.data)
	 		}
	 	
	 }
}