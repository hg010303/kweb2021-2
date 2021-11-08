select users.id, users.name, seat_number
from users inner join tickets on users.id=tickets.user
where users.id=11
order by seat_number;

select users.id, users.name, count(*) as cnt, sum(trains.distance) as total
from tickets, trains, users
where trains.id=tickets.train and users.id=tickets.user
group by users.id
order by total desc
limit 6;

select trains.id, types.name, src_stn.name, dst_stn.name, timediff(arrival,departure) as travel_time
from trains, types, stations as src_stn, stations as dst_stn
where trains.type = types.id and trains.source = src_stn.id and trains.destination = dst_stn.id
order by travel_time desc
limit 6;

select types.name as type, src.name as src_stn, dst.name as dst_stn, trains.departure, trains.arrival, Round(types.fare_rate*trains.distance/1000) as fair
from trains, types, stations as src, stations as dst
where trains.type = types.id and src.id = trains.source and dst.id = trains.destination
group by trains.departure;

select trains.id, types.name as type, src.name as src_stn, dst.name as dst_stn, count(*) as occupied, types.max_seats as maximum
from tickets, trains,types,stations as src, stations as dst
where tickets.train = trains.id and types.id = trains.type and src.id = trains.source and dst.id = trains.destination
group by tickets.train
order by trains.id;

select trains.id, types.name as type, src.name as src_stn, dst.name as dst_stn, count(*) as occupied, types.max_seats as maximum
from tickets right join trains on  trains.id = tickets.train,
types,stations as src, stations as dst
where types.id = trains.type and src.id = trains.source and dst.id = trains.destination
group by tickets.train
order by trains.id;