#%reset -f # (force-)resets the variables (clears the variables, function definitions, etc.)
import ipywidgets as widgets

# first, we need a dictionary that maps the plaintext letters to their order number in the alphabet:
Letter_to_Integer = {'A': 0,
                     'B': 1,
                     'C': 2,
                     'D': 3,
                     'E': 4,
                     'F': 5,
                     'G': 6,
                     'H': 7,
                     'I': 8,
                     'J': 9,
                     'K': 10,
                     'L': 11,
                     'M': 12,
                     'N': 13,
                     'O': 14,
                     'P': 15,
                     'Q': 16,
                     'R': 17,
                     'S': 18,
                     'T': 19,
                     'U': 20,
                     'V': 21,
                     'W': 22,
                     'X': 23,
                     'Y': 24,
                     'Z': 25}

# we also need a dictionary to map back an order number to the letter:
Integer_to_Letter = {0: 'A',
                     1: 'B',
                     2: 'C',
                     3: 'D',
                     4: 'E',
                     5: 'F',
                     6: 'G',
                     7: 'H',
                     8: 'I',
                     9: 'J',
                     10: 'K',
                     11: 'L',
                     12: 'M',
                     13: 'N',
                     14: 'O',
                     15: 'P',
                     16: 'Q',
                     17: 'R',
                     18: 'S',
                     19: 'T',
                     20: 'U',
                     21: 'V',
                     22: 'W',
                     23: 'X',
                     24: 'Y',
                     25: 'Z'}

# just a header message for our app!:
header_message_encryption = widgets.Label(value='Caesar Cipher: Encryption')

# a text input to get the plaintext message:
input_plaintext = widgets.Text(
    value = 'Hello, Universe!', # initial inside text
    placeholder = 'Enter your message to be encrypted', # inside text when cleared 
    description = 'Plaintext:', # text before the text-input widget
    disabled = False)

# another text input to get the value of the encryption key:
input_encryption_key = widgets.Text(
    value = '3', 
    placeholder = 'Enter the Caesar encryption key', 
    description = 'Key:', 
    disabled = False)

# the encryption function
def Caesar_encrypt(plaintext, key):
    """An implementation of the encryption component of the "Caesar-Cipher".
    The encryption is done by shifting each letter of the "plaintext" 
    by the "key" value in the alphabetic order.

    Args:
        plaintext: The plaintext message (a string).
        key: The encryption key (an integer) 

    Returns:
        The ciphertext (string). 

    """
    try:   
        ciphertext = ''
        key = int(key)
        for letter in plaintext.upper():
            if letter.isalpha(): 
                letter_number = Letter_to_Integer[letter]
                new_letter_num =  (letter_number + key)%26
                ciphertext += Integer_to_Letter[new_letter_num]
            else: 
                ciphertext += letter
        
        print('Ciphertext (encrypted message): {}'.format(ciphertext))
        
    except ValueError as e:
        print(e) # print the specific error raised
        # also print a hint message:
        print('Note: the "plaintext" has to be a string, and the "key" an integer!') 
        
ui = widgets.VBox([header_message_encryption, input_plaintext, input_encryption_key])
out = widgets.interactive_output(Caesar_encrypt, {'plaintext': input_plaintext, 'key': input_encryption_key})
display(ui, out)
