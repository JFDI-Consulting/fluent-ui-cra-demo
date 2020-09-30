import { Label, Persona, Stack } from "@fluentui/react";
import React, { useEffect, useState } from "react";
import { useTheme } from "../theming/ThemeContext";
import { Card, CardItem, CardSection } from "@uifabric/react-cards";

const People = () => {
    const [data, setData] = useState([]);

    const [
        {
            theme: { palette }
        }
    ] = useTheme();

    useEffect(() => {
        fetch("https://randomuser.me/api/?results=10")
            .then(response => response.json())
            .then(obj => setData(obj.results));
    }, []);

    return (
        <div>
            <Stack horizontal wrap tokens={{ childrenGap: 10 }}>
                {data.length ? (
                    data.map(
                        ({
                            name: { first, last },
                            email,
                            picture: { thumbnail }
                        }) => (
                            <Card key={email}>
                                <CardSection>
                                    <CardItem>
                                        <Persona
                                            text={`${first} ${last}`}
                                            secondaryText={email}
                                            imageUrl={thumbnail}
                                        />
                                    </CardItem>
                                </CardSection>
                            </Card>
                        )
                    )
                ) : (
                    <Label text="No data to display" />
                )}
            </Stack>
        </div>
    );
};

export default People;
