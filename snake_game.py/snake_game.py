import curses

def main(stdscr):
    # Set up the screen
    curses.curs_set(0)
    stdscr.nodelay(1)
    stdscr.timeout(100)

    # Create the snake and food
    snake_x = 10
    snake_y = 10
    snake = [
        [snake_y, snake_x],
        [snake_y, snake_x-1],
        [snake_y, snake_x-2]
    ]
    food = [20, 20]

    # Game logic
    while True:
        # Render the game
        stdscr.clear()
        for segment in snake:
            stdscr.addstr(segment[0], segment[1], '#')
        stdscr.addstr(food[0], food[1], '*')

        # Get the user's input
        key = stdscr.getch()

        # TODO: Handle the user's input and update the game state

if __name__ == "__main__":
    curses.wrapper(main)
