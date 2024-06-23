# Write your MySQL query statement below
SELECT a.contest_id, ROUND((a.registered_users*100.0)/t.total, 2) AS percentage FROM (SELECT contest_id, COUNT(DISTINCT user_id) AS registered_users FROM Register GROUP BY contest_id) AS a CROSS JOIN (SELECT COUNT(*) AS total FROM Users) AS t ORDER BY percentage DESC, a.contest_id ASC