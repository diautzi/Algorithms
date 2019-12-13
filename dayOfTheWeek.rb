#Given a date, return the corresponding day of the week for that date.

#The input is given as three integers representing the day, month and year respectively.

#Return the answer as one of the following values {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"}.

 

#Example 1:

#Input: day = 31, month = 8, year = 2019
#Output: "Saturday"

def day_of_the_week(day, month, year)
    days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    d = Time.new(year,month,day) 
    days[d.wday]
end
