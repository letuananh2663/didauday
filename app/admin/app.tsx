"use client";

import { Admin, Resource } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";

import { CourseList } from "./course/list";
import { CourseEdit } from "./course/edit";
import { CourseCreate } from "./course/create";

import { UnitList } from "./unit/list";
import { UnitEdit } from "./unit/edit";
import { UnitCreate } from "./unit/create";

import { LessonList } from "./lesson/list";
import { LessonEdit } from "./lesson/edit";
import { LessonCreate } from "./lesson/create";

import { ChallengeList } from "./challenge/list";
import { ChallengeEdit } from "./challenge/edit";
import { ChallengeCreate } from "./challenge/create";

import { ChallengeOptionsList } from "./challengeOption/list";
import { ChallengeOptionEdit } from "./challengeOption/edit";
import { ChallengeOptionCreate } from "./challengeOption/create";

const dataProvider = simpleRestProvider("/api");

const App = () => {
    return (
        <Admin dataProvider={dataProvider}>
            <Resource
                name="courses"
                list={CourseList}
                create={CourseCreate}
                edit={CourseEdit}
                recordRepresentation="title"
            />

            <Resource
                name="units"
                recordRepresentation="title"
                list={UnitList}
                create={UnitCreate}
                edit={UnitEdit}
            />

            <Resource
                name="lessons"
                recordRepresentation="title"
                list={LessonList}
                create={LessonCreate}
                edit={LessonEdit}
            />

            <Resource
                name="challenges"
                recordRepresentation="question"
                list={ChallengeList}
                create={ChallengeCreate}
                edit={ChallengeEdit}
            />

            <Resource
                name="challengeOptions"
                recordRepresentation="text"
                list={ChallengeOptionsList}
                create={ChallengeOptionCreate}
                edit={ChallengeOptionEdit}
                options={{
                    label: "Challenge Options",
                }}
            />
        </Admin>
    );
};

export default App;
