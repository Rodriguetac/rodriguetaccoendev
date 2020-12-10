import React, { useState } from 'react';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import About from './Pages/About/About';
import Base from './Pages/Base/Base';
import Timeline from './Pages/Timeline/Timeline';
import Contact from './Pages/Contact/Contact';
import { LanguageProvider } from './languageContext';

const InfoContainer = props => {
    // pretend we are fetching these 'things'

    const [currentLanguage, setCurrentLanguage] = useState("fr");

    const switchLanguage = () => {
        return (
            <div>
                <FormControl component="fieldset">
                    <FormGroup aria-label="position" row>
                        <FormControlLabel
                            value="top"
                            control={<Switch color="primary" />}
                            labelPlacement="top"
                            onChange={onChangeAction} />
                    </FormGroup>
                </FormControl>
            </div>
        )
    }
    const onChangeAction = () => {
        if (currentLanguage == "fr") {
            setCurrentLanguage("en");
        }
        else
        {
            setCurrentLanguage("fr");
        }
    }
    return (
        <div>
            <LanguageProvider value={{ currentLanguage, switchLanguage }}>
                <Base />
                <About />
                <Timeline />
                <Contact />
            </LanguageProvider>
        </div>
    )
}
export default InfoContainer