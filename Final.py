import datetime
 
FilePath = 'FSprint-S1-Files\data.txt'
 
# Read the data from data.txt
with open('FSprint-S1-Files\data.txt', 'r') as file:
    Data = [line.strip().split(', ') for line in file]
 
# Assuming the date is the fourth element in each line
DataDate = datetime.datetime.strptime(Data[0][3], '%Y-%m-%d').date()
 
# Check if it's the first day of the month
if DataDate.day == 1:
 
    print("It's the first day of the month. Stand fees are being charged and revenue is being recorded.")
else:
    print("It's not the first day of the month. No action needed.")
 
# Modify the data (for example, changing Alice's age to 31)
for entry in Data:
    if entry[0] == 'Alice':
        entry[1] = '31'
 
# Write the modified data back to the file
with open('FSprint-S1-Files\data.txt', 'w') as file:
    for entry in Data:
        file.write(', '.join(entry) + '\n')