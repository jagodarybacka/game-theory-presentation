# Iterowany dylemat więźnia
## Ewolucja współpracy

1. pojedyncza gra

-OK przypomnienie jak wyglada macierz wypłat

-OK mini analiza jak wygladaja własnosci wypłat

-OK Individual rationality leads to a worse outcome for both than is possible. The second part of the definition of the Prisoner's Di- lemma is that the players cannot get out of their dilemma by taking turns exploiting each other. If the game is played a known finite number of times, the players still have no incentive to cooperate. This is certainly true on the last move since there is no future to influence.

-OK uogólnienie wypłat na R T S P

-OK What makes it possible for cooperation to emerge is the fact that the players might meet again. This possibility means that the choices made today not only determine the outcome of this move, but can also influence the later choices of the players. The future can therefore cast a shad- ow back upon the present and thereby affect the current strategic situation.

-OK What is the best strategy?" In other words, what strategy will yield a player the highest possible score? This is a good question, but as will be shown later, no best rule exists independently of the strategy being used by the other player.

  - The beginning of the story is that cooperation can get started even in a world of unconditional defection. The development cannot take place if it is tried only by scattered individuals who have virtually no chance to interact with each other. However, cooperation can evolve from small clusters of individuals who base their cooperation on reci- procity and have even a small proportion of their interac- tions with each other.
  - The middle of the story is that a strategy based on reciprocity can thrive in a world where many different kinds of strategies are being tried.
  - The end of the story is that cooperation, once estab- lished on the basis of reciprocity, can protect itself from invasion by less cooperative strategies. Thus, the gear wheels of social evolution have a ratchet.

2. turniej w dylemat wieznia

-OK za wikipedia - kto go zorganizował, kiedy
- zasady: Wanting to find out what would happen, I invited pro-
fessional game theorists to send in entries to just such a
computer tournament. It was structured as a round robin,
meaning that each entry was paired with each other entry.
As announced in the rules of the tournament, each entry
was also paired with its own twin and with RANDOM, a
program that randomly cooperates and defects with equal
probability.
Most of the
entrants were recruited from those who had published arti-
cles on game theory in general or the Prisoner's Dilemma
in particular.
- zaproponuj aby widownia sama odbyła taki turniej, na twojej grze, przeciwko losowemu przeciwnikowi (wybór powinien być pomiedzy tit-for-tat tit for two tats, random, detektywem...)
- poznajmy wszystkie strategie (screeny i gify z game of trust)
- wrcajac do turnieju: TIT FOR TAT, submitted by Professor Anatol Rapoport
of the University of Toronto, won the tournament. This
was the simplest of all submitted programs and it turned
out to be the best!
- TIT FOR TAT, of course, starts with a cooperative
choice, and thereafter does what the other player did on
the previous move. This decision rule is probably the most
widely known and most discussed rule for playing the Pris-
oner's Dilemma. It is easily understood and easily pro-
grammed. It is known to elicit a good degree of coopera-
tion when played with humans
-It has the disadvantage that it
is too generous with the RANDOM rule, which was
known by the participants to be entered in the tournament.
- ciekawostka The striking fact is that none of the more complex pro-
grams submitted was able to perform as well as the origi-
nal, simple TIT FOR TAT. This result contrasts with computer chess tournaments,
where complexity is obviously needed. For example, in the
Second World Computer Chess Championships, the least
complex program came in last (Jennings 1978). It was sub-
mitted by Johann Joss of the Eidgenossishe Technische
Hochschule of Zurich, Switzerland, who also submitted an
entry to the Computer Prisoner's Dilemma Tournament.
His entry to the Prisoner's Dilemma Tournament was a
small modification of TIT FOR TAT. But his modifica-
tion, like the others, just lowered the performance of the
decision rule.

2. Ewolucja w grze

- A very useful approach to this question has been devel-
oped by an evolutionary biologist, John Maynard Smith
55The Emergence of Cooperation
(1974 and 1978). This approach imagines the existence of a
whole population of individuals employing a certain strate-
gy, and a single mutant individual employing a different
strategy. The mutant strategy is said to invade the popula-
tion if the mutant can get a higher payoff than the typical
member of the population gets. Put in other terms, the
whole population can be imagined to be using a single
strategy, while a single individual enters the population
with a new strategy. The newcomer will then be interact-
ing only with individuals using the native strategy. More-
over, a native will almost certainly be interacting with an-
other native since the single newcomer is a negligible part
of the population. Therefore a new strategy is said to invade
a native strategy if the newcomer gets a higher score with a
native than a native gets with another native. Since the
natives are virtually the entire population, the concept of
invasion is equivalent to the single mutant individual being
able to do better than the population average. This leads
directly to the key concept of the evolutionary approach. A
strategy is collectively stable if no strategy can invade it. 1
The biological motivation for this approach is based on
the interpretation of the payoffs in terms of fitness (survival
and number of offspring). All mutations are possible; and if
any could invade a given population, this mutation pre-
sumably would have the chance to do so. For this reason,
only a collectively stable strategy is expected to be able to
maintain itself in the long-run equilibrium as the strategy
used by all. Biological applications will be discussed in
chapter 5, but for now the point is that collectively stable
strategies are important because they are the only ones that
an entire population can maintain in the long run in the
face of any possible mutant.

- animacje z got
- TIT FOR TAT is collectively stable if
and only if, w is large enough. This critical value of w is a
function of the four payoff parameters, T, R, P, and S. One specific implication is that if the other player is
unlikely to be around much longer because of apparent
weakness, then the perceived value of w falls and the reci-
procity of TIT FOR TAT is no longer stable.

- Any strategy which may be the first to
cooperate can be collectively stable only when w is suffi-
ciently large. The TIT FOR TAT and the two-for-one strategies are
both nice decision rules in that they are never the first to
defect. The advantage of a nice rule in resisting invasion is
that it attains the highest score possible in a population
consisting of a single type of strategy. It does this by get-
ting the reward for mutual cooperation on each move with
another player using the same strategy.

- For a nice strategy to be collectively sta-
ble, it must be provoked by the very first defection of the
other player.

- ALL D is always collectively stable.
If the other player is certain to defect, there is no point in
your ever cooperating. A population of players using ALL
D will each get P per move. There is no way a player can
do any better than this if no one else will ever cooperate.
After all, any cooperative choice would just yield the suck-
er's payoff, S, with no chance for future compensation.
This proposition has important implications for the evo-
lution of cooperation. If one imagines a system starting
with individuals who cannot be enticed to cooperate, the
collective stability of ALL D implies that no single individ-
ual can hope to do any better than go along and be uncoop-
erative as well. A world of "meanies" can resist invasion by
anyone using any other strategy—provided that the new-
comers arrive one at a time. The problem, of course, is that
a single newcomer in such a mean world has no one who
will reciprocate any cooperation. If the newcomers arrive
in small clusters, however, they will have a chance to get
cooperation started.

4. Kooperacja bez przyjaźni

- live and let live podczas drugiej wojny

5. Kooperacja bez przewidywania
veral concepts from evolu-
tionary biology were borrowed to help analyze the emer-
gence of cooperation between people. In this chapter, the
favor is returned. The findings and theory that have been
developed to understand people will now be applied to the
analysis of cooperation in biological evolution. An impor-
tant conclusion drawn from this investigation is that fore-
sight is not necessary for the evolution of cooperation.

To account for the manifest existence of cooperation and
related group behavior, such as altruism and restraint in
competition, evolutionary theory has recently acquired two
kinds of extension. These extensions are, broadly, genetical
kinship theory and reciprocity theory. Most of the recent
activity, both in fieldwork and in further developments of
theory, has been on the side of kinship. Formal approaches
have varied, but kinship theory has increasingly taken a
gene's-eye view of natural selection (Dawkins 1976). A
gene, in effect, looks beyond its mortal bearer to the poten-
tially immortal set of its replicas existing in other related
individuals. If the players are sufficiently closely related,
altruism can benefit reproduction of the set, despite losses
to the individual altruist. In accord with this theory's pre-
dictions, almost all clear cases of altruism, and most ob-
served cooperation—apart from their appearance in the hu-
man species—occur in contexts of high relatedness, usually
between immediate family members. The evolution of the
89Cooperation Without Friendship or Foresight
suicidal barbed sting of the honeybee worker could be tak-
en as paradigm for this line of theory

The contribution of this chapter to biology is new in
three ways:
1. In a biological context, the model is novel in its probabilistic
treatment of the possibility that two individuals may interact
again. This allows light to be shed on certain specific biologi-
cal processes such as aging and territoriality.
2. The analysis of the evolution of cooperation considers not
only the final stability of a given strategy, but also the initial
viability of a strategy in an environment dominated by non-
cooperating individuals, as well as the robustness of a strategy
in a variegated environment composed of other individuals
using a variety of more or less sophisticated strategies. This
approach allows a richer understanding of the full chronology
of the evolution of cooperation than has previously been
possible.
3. The applications include behavioral interaction at the micro-
bial level. This leads to some speculative suggestions of ration-
ales able to account for the existence of both chronic and acute
phases in many diseases, and for a certain class of genetic de-
fects, exemplified by Down's syndrome.

Apart from being the solution in game theory, defection
in a single encounter is also the solution in biological evo-
lution. 5 It is the outcome of inevitable evolutionary trends
through mutation and natural selection: if the payoffs are
in terms of fitness, and the interactions between pairs of
individuals are random and not repeated, then any population
with a mixture of heritable strategies evolves to a state
where all individuals are defectors. Moreover, no single
differing mutant strategy can do better than others when
the population is using this strategy. When the players will
never meet again, the strategy of defection is the only sta-
ble strategy.

Stated formally, a strategy is evolutionarily stable if a
population of individuals using that strategy cannot be in-
vaded by a rare mutant adopting a different strategy. 7
There may be many evolutionarily stable strategies. In fact,
proposition 1 of the first chapter showed that when w is
sufficiently great, there is no single best strategy regardless
of the behavior of the others in the population. Just because
there is no single best strategy, it does not follow that anal-
ysis is hopeless. On the contrary, chapters 2 and 3 showed
that it is possible to analyze not only the stability of a given
strategy, but also its robustness and initial viability.

an organism does not need a brain to employ a
strategy. Bacteria, for example, have a basic capacity to play
games in that (1) bacteria are highly responsive to selected
93Cooperation Without Friendship or Foresight
aspects of their environment, especially their chemical en-
vironment; (2) this implies that they can respond differen-
tially to what other organisms around them are doing; (3)
these conditional strategies of behavior can certainly be in-
herited; and (4) the behavior of a bacterium can affect the
fitness of other organisms around it, just as the behavior of
other organisms can affect the fitness of a bacterium. Re-
cent evidence shows that even a virus can use a conditional
strategy

rategy (Ptashne, Johnson, and Pabo 1982).
While the strategies can easily include differential re-
sponsiveness to recent changes in the environment or to
cumulative averages over time, in other ways their range of
responsiveness is limited. Bacteria cannot "remember" or
"interpret" a complex past sequence of changes, and they
probably cannot distinguish alternative origins of adverse
or beneficial changes. Some bacteria, for example, produce
their own antibiotics, called bacteriocins. These are harm-
less to bacteria of the producing strain, but are destructive
to others. A bacterium might easily have production of its
own bacteriocin dependent on the perceived presence of
like hostile products in its environment, but it could not
aim the toxin produced toward an offending initiator

s one moves up the evolutionary ladder in neural com-
plexity, game-playing behavior becomes richer. The intel-
ligence of primates, including humans, allows a number of
relevant improvements: a more complex memory, more
complex processing of information to determine the next
action as a function of the interaction so far, a better esti-
mate of the probability of future interaction with the same
individual, and a better ability to distinguish between dif-
ferent individuals. The discrimination of others may be
among the most important of abilities because it allows one
to handle interactions with many individuals without hav-
94The Evolution of Cooperation in Biological Systems
ing to treat them all the same, thus making possible the
rewarding of cooperation from one individual and the pun-
ishing of defection from another.
TIT FOR TAT is not the only strategy that can be evo-
lutionarily stable. In fact ALL D is evolutionarily stable no
matter what the probability is of interaction continuing.
This raises the problem of how an evolutionary trend to
cooperative behavior could ever have started in the first
place.
Genetic kinship theory suggests a plausible escape from
the equilibrium of ALL D. Close relatedness of players per-
mits true altruism—sacrifice of fitness by one individual for
the benefit of another. True altruism can evolve when the
conditions of cost, benefit, and relatedness yield net gains
for the altruism-causing genes that are resident in the relat-
ed individuals (Fisher 1930; Haldane 1955; Hamilton
1963). Not defecting in a single-move Prisoner's Dilemma
is altruism of a kind (the individual is foregoing proceeds
that might have been taken); so this kind of behavior can
evolve if the two players are sufficiently related
Once the genes for cooperation exist, selection will pro-
mote strategies that base cooperative behavior on cues in
the environmentFinally, when the probability of two indi-
viduals meeting each other again is sufficiently high, coop-
eration based on reciprocity can thrive and be evolutionari-
ly stable in a population with no relatedness at all.
Another mechanism that can get cooperation started
when virtually everyone is using ALL D was demonstrated
in chapter 3. This is clustering.
A case of cooperation that fits this scenario, at least on
first evidence, has been discovered in the spawning rela-
tionships in a sea bass (Fischer 1980; Leigh 1977). These
fish have the sexual organs of both the male and the fe-
male. They form pairs and roughly may be said to take
turns at being the high investment partner (laying eggs)
and low investment partner (providing sperm to fertilize
eggs). Up to ten spawnings occur in a day and only a few
eggs are provided each time. Pairs tend to break up if sex
roles are not divided evenly.


A variety of specific biological applications of this ap-
proach follows from two of the requirements for the evolu-
tion of cooperation. The basic idea is that an individual
must not be able to get away with defecting without the
other individuals being able to retaliate effectively. The
response requires that the defecting individual not be lost
in a sea of anonymous others. Higher organisms avoid this
problem by their well-developed ability to recognize many
different individuals of their species, but lower organisms
must rely on mechanisms that drastically limit the number
of different individuals or colonies with which they can
interact effectively. The other important requirement to
make retaliation effective is that the probability, w, of the
same two individuals meeting again must be sufficiently
high.
When an organism is not able to recognize the individ-
ual with which it had a prior interaction, a substitute
mechanism is to make sure that all of its interactions are
with the same player. This can be done by maintaining
continuous contact with the other. This method is applied
in most mutualisms, situations of close association of mutual
benefit between members of different species. Examples in-
clude a hermit crab and its sea-anemone partner, a cicada
and the varied colonies of microorganisms housed in its
body, or a tree and its mycorrhizal fungi.
Another mechanism for avoiding the need for recogni-
tion is to guarantee the uniqueness of the pairing of players
by employing a fixed place of meeting. Consider, for ex-
100The Evolution of Cooperation in Biological Systems
ample, mutualisms based on cleaning in which a small fish
or a crustacean removes and eats parasites from the body (or
even from the inside of the mouth) of a larger fish that is
its potential predator. These aquatic cleaner mutualisms oc-
cur in coastal and reef situations where animals live in fixed
home ranges or territories (Trivers 1971). They seem to be
unknown in the free-mixing circumstances of the open sea.

6. jak grac zasady ogolne

1. Don't be envious.
People are used to thinking about zero-sum interactions. In
these settings, whatever one person wins, another loses. A
good example is a chess tournament. In order to do well,
the contestant must do better than the other player in the
game most of the time. A win for White is necessarily a
loss for Black.
But most of life is not zero-sum. Generally, both sides
can do well, or both can do poorly. Mutual cooperation is
often possible, but not always achieved. That is why the
Prisoner's Dilemma is such a useful model for a wide vari-
ety of everyday situations.
Asking how well you are doing compared to how well
the other player is doing is not a good standard unless your
goal is to destroy the other player. In most situations, such
a goal is impossible to achieve, or likely to lead to such
costly conflict as to be very dangerous to pursue. When
you are not trying to destroy the other player, comparing
your score to the other's score simply risks the develop-
ment of self-destructive envy. A better standard of compar-
ison is how well you are doing relative to how well some-
one else could be doing in your shoes.
TIT FOR TAT won the tournament because it did well
in its interactions with a wide variety of other strategies.
On average, it did better than any other rule with the other
strategies in the tournament. Yet TIT FOR TAT never
once scored better in a game than the other player! In fact,
it can't.
2. Don't be the first to defect.
Both the tournament and the theoretical results show that
it pays to cooperate as long as the other player is
cooperating.
The single best predictor of how well a rule performed was
whether or not it was nice, which is to say, whether or not
it would ever be the first to defect. In the first round, each
of the top eight rules were nice, and not one of the bottom
seven were nice. In the second round, all but one of the top
113Advice for Participants and Reformers
fifteen rules were nice (and that one ranked eighth). Of the
bottom fifteen rules, all but one were not nice.
This fact has unfortunate implications for groups who
are known to move from one place to another. An anthro-
pologist finds that a Gypsy approaches a non-Gypsy ex-
pecting trouble, and a non-Gypsy approaches a Gypsy sus-
piciously, expecting double-dealing.
In a California community, Gypsies were again found
not to pay all of a doctor's bill, but municipal fines were
paid promptly (Sutherland 1975, p. 70). These fines were
usually for breaking garbage regulations. This was among a
group of Gypsies who returned to the same town every
115Advice for Participants and Reformers
winter. Presumably, the Gypsies knew that they had an
ongoing relationship with the garbage collection service of
that town, and could not shop around for another service.
Conversely, there were always enough doctors in the area
for them to break
Short interactions are not the only condition which
would make it pay to be the first to defect. The other
possibility is that cooperation will simply not be reciprocat-
ed.
3. Reciprocate both cooperation and defection.
The extraordinary success of TIT FOR TAT leads to some
simple, but powerful advice: practice reciprocity. After co-
operating on the first move, TIT FOR TAT simply recip-
rocates whatever the other player did on the previous
move.
This simple rule is amazingly robust. It won the first
round of the Computer Tournament for the Prisoner's Di-
lemma, by attaining a higher average score than any other
entry submitted by professional game theorists. And when
this result was publicized for the contestants in the second
round, TIT FOR TAT won again. The victory was obvi-
ously a surprise, since anyone could have submitted it to
the second round after seeing its success in the first round.
But obviously people hoped they could do better—and
they were wrong.
The reciprocity embodied in TIT FOR TAT is good for
theoretical reasons as well. When the future is important
enough relative to the present, TIT FOR TAT is collec-
tively stable. This means that if everyone is using TIT
FOR TAT, there is no better advice to offer a particular
player than to use TIT FOR TAT as well. Or putting it
another way, if you are sure the other player is using TIT
FOR TAT and the interaction will last long enough, then
118How to Choose Effectively
you might as well do the same. But the beauty of the reci-
procity of TIT FOR TAT is that it is good in such a wide
range of circumstances.
TIT FOR TWO TATS is the rule that defects only if
the other player has defected in both of the previous two
moves. Therefore it returns one-for-two. This relatively
forgiving rule would have won the first round of the Com-
puter Tournament for the Prisoner's Dilemma had it been
submitted. It would have done so well because it would
have avoided mutual recriminations with some of the other
rules that caused trouble even for TIT FOR TAT. Yet in
the second round of the tournament, when TIT FOR
119Advice for Participants and Reformers
TWO TATS was actually submitted, it did not even score
in the top third. The reason is that the second round con-
tained some rules that were able to exploit its willingness
to forgive isolated defections.
4. Don't be too clever.
The tournament results show that in a Prisoner's Dilemma
situation it is easy to be too clever. The very sophisticated
rules did not do better than the simple ones. In fact, the so-
called maximizing rules often did poorly because they got
into a rut of mutual defection. A common problem with
these rules is that they used complex methods of making
inferences about the other player—and these inferences
were wrong. Part of the problem was that a trial defection
by the other player was often taken to imply that the other
player could not be enticed into cooperation. But the heart
of the problem was that these maximizing rules did not
120How to Choose Effectively
take into account that their own behavior would lead the
other player to change.
Rules that try to maximize their own score while treat-
ing the other player as a fixed part of the environment
ignore this aspect of the interaction, no matter how clever
they are in calculating under their limiting assumptions.
Therefore, it does not pay to be clever in modeling the
other player if you leave out the reverberating process in
which the other player is adapting to you, you are adapting
to the other, and then the other is adapting to your adapta-
tion and so on. This is a difficult road to follow with much
hope for success. Certainly none of the more or less com-
plex rules submitted in either round of the tournament was
very good at it.
Another way of being too clever is to use a strategy of
"permanent retaliation." This is the strategy of cooperating
111Advice for Participants and Reformers
as long as the other player cooperates, but then never again
cooperating after a single defection by the other. Since this
strategy is nice, it does well with the other nice rules. And
it does well with rules which were not very responsive,
such as the completely random rule. But with many others
it does poorly because it gives up too soon on rules that try
an occasional defection, but are ready to back off once pun-
ished. Permanent retaliation may seem clever because it
provides the maximum incentive to avoid defection. But it
is too harsh for its own good.
There is yet a third way in which some of the tourna-
ment rules are too clever: they employ a probabilistic strat-
egy that is so complex that it cannot be distinguished by
the other strategies from a purely random choice. In other
words, too much complexity can appear to be total chaos.
If you are using a strategy which appears random, then you
also appear unresponsive to the other player. If you are
unresponsive, then the other player has no incentive to co-
operate with you. So being so complex as to be incompre-
hensible is very dangerous.
7. wnioski
