import { Button, Flex, TextField} from '@radix-ui/themes';
import { EnvelopeClosedIcon, LockClosedIcon, PersonIcon }from '@radix-ui/react-icons'
import React from 'react'

export const SignupForm = () => {
  return (
    <Flex direction="column" gap="2">
        <label htmlFor="name">Name:</label>
        <TextField.Root type="text" placeholder="Write your name">
            <TextField.Slot >
                <PersonIcon height="16" width="16"/>
            </TextField.Slot>
        </TextField.Root>

        <label htmlFor="email">Email</label>
        <TextField.Root type="email" placeholder="email@domain.com">
            <TextField.Slot>
                <LockClosedIcon height="16" width="16"/>
            </TextField.Slot>
        </TextField.Root>

        <label htmlFor="email">Password</label>
                <TextField.Root type="password" placeholder="**********">
                    <TextField.Slot>
                        <LockClosedIcon height="16" width="16"/>
                    </TextField.Slot>
                </TextField.Root>

        <Button>
            Sign Up
        </Button>
    </Flex> 
    );
}
