import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
function AboutItemAndPolicy(props) {
    return (
        <React.Fragment>
            {/* About this item */}
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                    <Typography> About this item</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div data-v-3af7fc61="" class="font-open-sans"><p>How often do you think about your child`s future? What is waiting for your little one ahead? What habits will he has? Will he be good at networking? What job and education will receive? </p><p>Oh, there are so many questions. Sometimes we even can get anxious. But still, children bring so many emotions into your live!<br />We understand how important it is, to feel this specter of emotions. And this is exactly what we are doing in our company – helping you to form your kids` future.</p><h2 class="h6 col-form-label pb-2">Meet our puzzles</h2><p class="mb-1">MADE OF: Made from plywood and water-based paint. So when your kid wants to put it in the mouth – it will be completely safe.</p><p class="mb-1">SIZES: The size of each puzzle will be convenient for kids to hold. Length varies from 8 to 24 inches and widths is 3,35 inches.</p><p class="mb-1">DEVELOPING: It is based on the Montessori technique. You can take it with you on a walk or small trips. So your kid can play while you can be busy with your tasks.</p><h2 class="h6 col-form-label pb-2">How could your puzzle look like</h2><ul><li>After several tests, we have chosen ten color schemes. Each of them has a different name. Pick one that you like the most.</li><li>Also, you can create your color scheme. Combine different colors from our palette. Get creative!</li><li>We have a set of different themed figures. Pick the ones that you and your child likes the most. We can add two figures to the puzzle, so pick responsibly.</li><li>As we already told you, you can keep your puzzles forever. We can add the engraved message to the back of the puzzle that makes it a perfect keepsake.</li><li>You can add pegs to the letters to make the puzzle more convenient. With them, it will be easier for kids to grab letters. </li><li>Unexpectedly for us, we have noticed that our clients are using jigsaw puzzles in their decor. Therefore, we have made a stand that will help you to put the jigsaw on a bedside table or shelf.</li></ul><h2 class="h6 col-form-label pb-2">How do we take care of you?</h2><p class="mb-1">Sometimes, something can go wrong. For example, with the delivery. But even if you had some bad experience, we want to fix it. That is why we are offering:</p><ul><li>If suddenly the puzzle arrives damaged - write to us. We will make you a replacement or give you a full refund.</li><li>If your dog ate some letters or they were lost - we will send you a new set of letters at a good price.</li><li>We also want you to be aware that are not always responsible for the delivery time. If we made the shipment on time, then you need to contact the delivery service. Most likely they have delays.</li></ul><h2 class="h6 col-form-label pb-2">Important information for the safety of your baby</h2><p>Be there when your child is playing with the puzzle. He has a good imagination that can lead to something unexpected.<br />Elements like the letter I and the number 1 - can be dangerous for a child from 0 to 3 years old.</p><p>We appreciate being a part of the way your child develops!</p></div>
                    </Typography>

                </AccordionDetails>
            </Accordion>

            {/*  Shipping & Return Policy */}
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                    <Typography>  Shipping & Return Policy</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div data-v-3af7fc61="" class="font-open-sans"><label class="col-form-label pt-0">Shipping</label><p>We are located in Ukraine, but we ship worldwide! Delivery usually takes 10-21 business days. But since it is international shipping, there might be delays on the part of the delivery service. Unfortunately, we don’t influence some processes. But from our side, we are doing everything to ship your product as fast as possible!</p><p>We will send you a confirmation by email. It will contain a link, through which you will be able to track your delivery. And you can always text us and we will give you the tracking number.</p><label class="col-form-label pb-2">If you got a damaged product</label><p>We take full responsibility for our products, shipping, and delivery. In case of damage or loss during delivery, we will send out a new product as soon as possible.</p><label class="col-form-label pb-2">Return and cancellation policy</label><p class="mb-0">You can cancel your order within 12 hours. After that, it goes to the manufacture and we cannot cancel it. Write to us to cancel your order.</p></div>
                    </Typography>

                </AccordionDetails>
            </Accordion>


        </React.Fragment>
    );
}

export default AboutItemAndPolicy;