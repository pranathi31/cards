import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'

// TODO: Update <Search> usage after its will be implemented

const Mobileheader = () => (

    <div>
        <Menu attached='top' >
            <Dropdown item icon='grid layout' simple >
                <Dropdown.Menu>
                    <Dropdown.Item><strong>YourChallenge</strong></Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item active>Product</Dropdown.Item>
                    <Dropdown.Item>Download</Dropdown.Item>
                    <Dropdown.Item>Pricing</Dropdown.Item>


                </Dropdown.Menu>
            </Dropdown>

        </Menu>
    </div>
)

export default Mobileheader