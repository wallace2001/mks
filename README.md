# Projeto simples de redux-saga

<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0 http://maven.apache.org/xsd/settings-1.0.0.xsd">

    <pluginGroups>
        <pluginGroup>external.atlassian.jgitflow</pluginGroup>
        <pluginGroup>com.audora.tools.mastermanager</pluginGroup>
        <pluginGroup>atom.scripts</pluginGroup>
        <pluginGroup>com.amashchenko.maven.plugin</pluginGroup>
    </pluginGroups>

    <servers>
        <server>
            <id>audora-releases</id>
            <username>wallace.silva</username>
            <password>N4zyWo53xdhfaCRN</password>
        </server>
        <server>
            <id>audora-snapshots</id>
            <username>wallace.silva</username>
            <password>N4zyWo53xdhfaCRN</password>
        </server>
    </servers>

    <mirrors>
        <mirror>
            <id>audora-releases</id>
            <mirrorOf>*</mirrorOf>
            <name>nexus-audora</name>
            <url>https://repository.audora.com.br/repository/maven-public/</url>
        </mirror>
    
        <mirror>
            <id>audora-snapshots</id>
            <mirrorOf>*</mirrorOf>
            <name>nexus-audora</name>
            <url>https://repository.audora.com.br/repository/maven-public/</url>
        </mirror>
    </mirrors>

</settings>
