<script>
    import { Container, Row, Col } from "sveltestrap";

    let urlApi = "https://wheat-zesty-puppy.glitch.me/";

    let urlOptional = "https://sos2223-11.ew.r.appspot.com/";

    let urlVercel = "https://sos2223-11-vercel.vercel.app/";

    const teamMembers = [
        {
            name: "Víctor Ruiz Jiménez",
            github: "https://github.com/vicruijim",
            dataname: "phone-line-stats",
        },
        {
            name: "Ignacio García Rodríguez",
            github: "https://github.com/ign13101",
            dataname: "association-stats",
        },
        {
            name: "Christian Asuero Carrellán",
            github: "https://github.com/chrasucar342",
            dataname: "projection-homes-stats",
        },
    ];
</script>

<Container>
    <div class="pageContainer">
        <br />

        <h2 id="sos2223-11">SOS2223-11</h2>
        <hr />

        <Row>
            <Col>
                <strong>Team</strong>
                <ul>
                    {#each teamMembers as member}
                        <li>
                            <a href={member.github}>{member.name}:</a> Fuente de
                            datos: <i>{member.dataname}</i>
                        </li>
                    {/each}
                </ul>
            </Col>
        </Row>

        <Row>
            <Col>
                <p>
                    <strong>Descripción del proyecto</strong>: Nuestro proyecto
                    tiene como objetivo analizar las correlaciones entre
                    asociaciones, líneas de teléfono y estructuras de hogares.
                </p>
            </Col>
        </Row>

        <Row>
            <Col>
                <p>
                    <strong>Repositorio</strong>:
                    <a href="https://github.com/gti-sos/SOS2223-11"
                        >gti-sos/SOS2223-11</a
                    >
                </p>
            </Col>
        </Row>

        <Row>
            <Col>
                <p>
                    <strong>URL del proyecto</strong>:
                    <a href="{urlOptional}"
                        >{urlOptional}</a
                    >
                </p>
            </Col>
        </Row>

        <Row>
            <Col>
                <p><strong>Interfaces</strong></p>
                <ul>
                    {#each teamMembers as member}
                    <li>
                        <a
                            href="{urlVercel}{member.dataname}"
                            >{urlVercel}{member.dataname}</a
                        > (desarrollada por {member.name})
                    </li>
                    {/each}
                    
                </ul>
            </Col>
        </Row>
        <Row>
            <Col>
                <p><strong>APIs</strong></p>
                <ul>
                    <li>
                        v1
                        <ul>
                            {#each teamMembers as member}
                            <li>
                                <a
                                    href="{urlApi}api/v1/{member.dataname}"
                                    >{urlApi}api/v1/{member.dataname}</a
                                > (desarrollada por {member.name})
                            </li>
                            {/each}
                            
                        </ul>
                    </li>
                    <li>
                        v2
                        <ul>
                            {#each teamMembers as member}
                            <li>
                                <a
                                    href="{urlApi}api/v2/{member.dataname}"
                                    >{urlApi}api/v2/{member.dataname}</a
                                > (desarrollada por {member.name})
                            </li>
                            {/each}
                            
                        </ul>
                    </li>
                </ul>
            </Col>
        </Row>
        <Row>
            <Col>
                <p><strong>Documentación de Postman</strong></p>
                <ul>
                    <li>
                        v1
                        <ul>
                            {#each teamMembers as member}
                            <li>
                                <a
                                    href="{urlOptional}api/v1/{member.dataname}/docs"
                                    >{urlOptional}api/v1/{member.dataname}/docs</a
                                >
                            </li>
                            {/each}
                            
                        </ul>
                    </li>
                    <li>
                        v2
                        <ul>
                            {#each teamMembers as member}
                            <li>
                                <a
                                    href="{urlOptional}api/v2/{member.dataname}/docs"
                                    >{urlOptional}api/v2/{member.dataname}/docs</a
                                >
                            </li>
                            {/each}
                            
                        </ul>
                    </li>
                </ul>
            </Col>
        </Row>

        <br />
    </div>
</Container>

<style>
    .pageContainer {
        margin-bottom: 8em;
    }
</style>
