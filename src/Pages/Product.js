import React, { useState, useEffect } from 'react';
import { Grid, Image, Card } from 'semantic-ui-react'
import { getDetails } from '../containers/ApiManager/ProductApi';

function Product() {
    const [users, setUsers] = useState([]);
    const [singleuser, setSingleuser] = useState();
    const [color, setColor] = useState('#A259FF');
    const [username, setUsername] = useState('');

    const cards = window.innerWidth <= 800 ? 1 : 4
    const grid = window.innerWidth <= 800 ? 1 : 2

    const preload = () => {
        getDetails()
            .then((res) => {
                setUsers(res.data.results);
            })
            .catch((err) => console.log(err));

    };
    const handleChange = (user, name) => {
        setSingleuser(user)
        setColor('#A259FF')
        setUsername(name)
    }



    useEffect(() => {
        preload();
    }, []);
    return (
        <React.Fragment>
            <div style={divstyle}>
                <Card style={segmentstyle} >
                    {singleuser !== undefined ? (<>
                        <Grid columns={grid}>
                            <Grid.Column width={4} style={imagegrid}>
                                <Image circular size='small' src={singleuser.picture.thumbnail} />
                            </Grid.Column>
                            <Grid.Column width={10}>

                                <h5 style={headingstyle}>
                                    {singleuser.name.title || ''}. {singleuser.name.first || ''} {singleuser.name.last || ''}
                                </h5>
                                <p style={description}>{singleuser.location.street.number}, {singleuser.location.street.name}, {singleuser.location.city}, {singleuser.location.state}, {singleuser.location.country}, {singleuser.location.postcode}
                                    <br />
                                    {singleuser.location.timezone.offset}- {singleuser.location.timezone.description}</p>

                                <p style={gender}>{singleuser.gender}</p>


                            </Grid.Column>
                        </Grid>
                    </>) :
                        (
                            <>
                                {users[0] ? (
                                    <>
                                        <Grid columns={grid}>
                                            <Grid.Column width={4} style={imagegrid}>
                                                <Image circular size='small' src={users[0].picture.large} />
                                            </Grid.Column>
                                            <Grid.Column width={10}>
                                                <h5 style={headingstyle}>
                                                    {users[0].name.title || ''}. {users[0].name.first || ''} {users[0].name.last || ''}
                                                </h5>
                                                <p style={description}>{users[0].location.street.number}, {users[0].location.street.name}, {users[0].location.city}, {users[0].location.state}, {users[0].location.country}, {users[0].location.postcode}
                                                    <br />
                                                    {users[0].location.timezone.offset}- {users[0].location.timezone.description}</p>
                                                <p style={gender}>{users[0].gender}</p>
                                            </Grid.Column>
                                        </Grid>
                                    </>
                                )
                                    : ''}

                            </>
                        )
                    }
                    <br />
                </Card>
                <br />
                <br />
                <Card.Group itemsPerRow={cards} style={cardgroupstyle}>
                    {users.map((user, index) => {
                        return (
                            <Card style={{ ...cardstyle, backgroundColor: user.name === username ? color : 'white' }} onClick={() => handleChange(user, user.name)} key={index}>

                                <p style={{ ...gender, color: user.name === username ? 'white' : 'rgba(0, 0, 0, 0.6)' }}>{user.gender}-{user.nat}</p>
                                <p style={{ ...description, color: user.name === username ? 'white' : 'black' }}><strong>{user.name.title}. {user.name.first} {user.name.last}</strong></p>
                                <p style={{ ...email, color: user.name === username ? 'white' : 'red' }}>{user.email}</p>
                            </Card>
                        )
                    })}

                </Card.Group>
            </div>
        </React.Fragment>
    )
}

export default Product

const divstyle = {
    marginTop: '100px',
}

const segmentstyle = {
    marginLeft: window.innerWidth <= 800 ? '10px' : '222px',
    marginRight: window.innerWidth <= 800 ? '20px' : '222px',
    width: window.innerwidth <= 800 ? '500px' : '900px'
}

const headingstyle = {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: '40px',
    lineHeight: '100%',
    letterSpacing: '1.85px',
    textDecorationLine: 'underline',
    color: '#E16259',
    marginTop: '25px',
    textAlign: 'start'
}

const description = {
    textAlign: 'start',
    color: 'black'
}

const gender = {
    color: 'rgba(0, 0, 0, 0.6)',
    textAlign: 'start',

}

const cardgroupstyle = {
    marginLeft: window.innerWidth <= 800 ? '20px' : '100px',
    marginRight: window.innerWidth <= 800 ? '20px' : '100px'
}

const cardstyle = {
    padding: '10px'
}
const email = {
    color: 'red',
    textAlign: 'start'
}
const imagegrid = {
    padding: '25px'
}