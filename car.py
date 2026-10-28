started = False
while True:
    command = input("> ").lower()
    if command == 'start':
        if not started:
            print('car started...Ready to go!')
            started = True
        else:
            print('car is already started!')
        command = input("> ")
    elif command == 'stop':
        if not started:
            print('car stopped.')
            started = False
        else:
            print('car is already stopped!')
        command = input("> ")
    elif command == "help":
        print('''
Start - to start the car
Stop - to stop the car
Quit - to exit
''')
    elif command == 'quit':
        break
    else:
        print('i dont understad that')
print('Process finished with exit code 0')
