import { Label, Persona, Spinner, Stack, Text } from "@fluentui/react";
import React, { useEffect, useState } from "react";
import { useTheme } from "../theming/ThemeContext";
import { Card, CardItem, CardSection } from "@uifabric/react-cards";
import useAxios from "axios-hooks";

const People = () => {
    // const [people, setPeople] = useState([]);
    const [{ data: { results: people = [] } = {}, loading, error }] = useAxios(
        "https://randomuser.me/api/?results=12"
    );
    const [
        {
            theme: { palette }
        }
    ] = useTheme();

    return (
        <div style={{ textAlign: "center" }}>
            {loading ? (
                <Spinner size="large" />
            ) : error ? (
                <>
                    <Text variant="large">An error occurred.</Text>
                    <Text>
                        {error.code} {error.message}
                    </Text>
                </>
            ) : (
                <Stack
                    horizontalAlign="center"
                    horizontal
                    wrap
                    disableShrink
                    tokens={{ childrenGap: 16, padding: 16, width: 200 }}
                >
                    {people.length ? (
                        people.map(
                            ({
                                name: { first, last },
                                email,
                                picture: { thumbnail }
                            }) => (
                                <Card style={{ width: "16rem" }} key={email}>
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
            )}
        </div>
    );
};

export default People;
